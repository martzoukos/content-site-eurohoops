import { EmailAlertChannel, Frequency, UrlAssertionBuilder, UrlMonitor } from 'checkly/constructs'

const alertChannel = new EmailAlertChannel('alerts-acme-com-email', {
  address: 'alerts@acme.com',
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
  sslExpiry: true,
  sslExpiryThreshold: 14,
})

const locations = ['us-east-1', 'eu-central-1'] as const

const monitors = [
  {
    logicalId: 'acme-com-url-monitor',
    name: 'acme.com URL monitor',
    url: 'https://acme.com',
  },
  {
    logicalId: 'www-acme-com-url-monitor',
    name: 'www.acme.com URL monitor',
    url: 'https://www.acme.com',
  },
  {
    logicalId: 'docs-acme-com-url-monitor',
    name: 'docs.acme.com URL monitor',
    url: 'https://docs.acme.com',
  },
]

for (const monitor of monitors) {
  new UrlMonitor(monitor.logicalId, {
    name: monitor.name,
    activated: true,
    muted: false,
    frequency: Frequency.EVERY_5M,
    locations: [...locations],
    alertChannels: [alertChannel],
    request: {
      url: monitor.url,
      followRedirects: false,
      assertions: [
        UrlAssertionBuilder.statusCode().equals(200),
      ],
    },
  })
}
