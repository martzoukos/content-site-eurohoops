import { expect, test } from '@playwright/test'
import { expectCertificateValidBeyond } from './tls'

const TARGET_URL = 'https://www.acme.com'
const HOSTNAME = 'www.acme.com'

test('www.acme.com returns HTTP 200 and has a healthy TLS certificate', async ({ page }) => {
  const response = await page.goto(process.env.ENVIRONMENT_URL ?? TARGET_URL, {
    waitUntil: 'domcontentloaded',
  })

  expect(response?.status()).toBe(200)
  await expectCertificateValidBeyond(HOSTNAME)
})
