import { Frequency, UrlAssertionBuilder, UrlMonitor } from 'checkly/constructs'

new UrlMonitor('checklyhq-com-uptime', {
  name: 'checklyhq.com uptime',
  activated: true,
  frequency: Frequency.EVERY_1M,
  locations: ['us-east-1', 'eu-west-1'],
  request: {
    url: 'https://checklyhq.com',
    followRedirects: true,
    assertions: [
      UrlAssertionBuilder.statusCode().equals(200),
    ],
  },
})
