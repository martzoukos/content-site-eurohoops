import { Frequency, RetryStrategyBuilder, UrlAssertionBuilder, UrlMonitor } from 'checkly/constructs'

new UrlMonitor('docs-acme-com-url-monitor', {
  name: 'docs.acme.com URL Monitor',
  activated: true,
  locations: [
    'us-east-1',
    'eu-central-1',
  ],
  frequency: Frequency.EVERY_5M,
  retryStrategy: RetryStrategyBuilder.noRetries(),
  degradedResponseTime: 3000,
  maxResponseTime: 5000,
  request: {
    url: 'https://docs.acme.com',
    assertions: [
      UrlAssertionBuilder.statusCode().equals(200),
    ],
  },
})
