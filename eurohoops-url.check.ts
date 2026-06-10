import { UrlMonitor, Frequency, UrlAssertionBuilder } from 'checkly/constructs'

new UrlMonitor('eurohoops-content-site-url', {
  name: 'Eurohoops Content Site - URL Monitor',
  activated: true,
  frequency: Frequency.EVERY_30S,
  locations: ['us-east-1', 'eu-west-1'],
  request: {
    url: 'https://content-site-eurohoops.vercel.app/',
    assertions: [
      UrlAssertionBuilder.statusCode().equals(200),
    ],
  },
  degradedResponseTime: 3000,
  maxResponseTime: 5000,
})
