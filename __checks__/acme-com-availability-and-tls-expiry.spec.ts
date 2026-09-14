import { expect, test } from '@playwright/test'
import https from 'https'
import tls from 'tls'

const hostname = 'acme.com'
const expiryWarningDays = 14

function getStatusCode(hostname: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const request = https.get({ hostname, path: '/', port: 443, timeout: 10_000 }, response => {
      response.resume()
      resolve(response.statusCode ?? 0)
    })

    request.on('timeout', () => {
      request.destroy(new Error(`timeout while requesting https://${hostname}/`))
    })
    request.on('error', reject)
  })
}

function getDaysUntilCertificateExpiry(hostname: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const socket = tls.connect({ host: hostname, port: 443, servername: hostname, rejectUnauthorized: true, timeout: 10_000 }, () => {
      const certificate = socket.getPeerCertificate()
      socket.end()

      if (!certificate.valid_to) {
        reject(new Error(`No TLS certificate expiry date found for ${hostname}`))
        return
      }

      const expiresAt = Date.parse(certificate.valid_to)
      const daysUntilExpiry = (expiresAt - Date.now()) / (1000 * 60 * 60 * 24)
      resolve(daysUntilExpiry)
    })

    socket.on('timeout', () => {
      socket.destroy(new Error(`timeout while checking TLS certificate for ${hostname}`))
    })
    socket.on('error', reject)
  })
}

test(`${hostname} returns HTTP 200 and has more than ${expiryWarningDays} days left on its TLS certificate`, async () => {
  const statusCode = await getStatusCode(hostname)
  expect(statusCode).toBe(200)

  const daysUntilExpiry = await getDaysUntilCertificateExpiry(hostname)
  expect(daysUntilExpiry).toBeGreaterThan(expiryWarningDays)
})
