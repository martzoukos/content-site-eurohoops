import { BrowserCheck, Frequency } from 'checkly/constructs'

const locations = ['us-east-1', 'eu-central-1'] as const
const frequency = Frequency.EVERY_5M
const tags = ['acme', 'status', 'tls']

new BrowserCheck('acme-com-status-and-tls', {
  name: 'acme.com status and TLS',
  activated: true,
  frequency,
  locations: [...locations],
  sslCheckDomain: 'acme.com',
  code: {
    entrypoint: './acme.com.spec.ts',
  },
  tags,
})

new BrowserCheck('www-acme-com-status-and-tls', {
  name: 'www.acme.com status and TLS',
  activated: true,
  frequency,
  locations: [...locations],
  sslCheckDomain: 'www.acme.com',
  code: {
    entrypoint: './www.acme.com.spec.ts',
  },
  tags,
})

new BrowserCheck('docs-acme-com-status-and-tls', {
  name: 'docs.acme.com status and TLS',
  activated: true,
  frequency,
  locations: [...locations],
  sslCheckDomain: 'docs.acme.com',
  code: {
    entrypoint: './docs.acme.com.spec.ts',
  },
  tags,
})
