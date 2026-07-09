import { Frequency, UrlAssertionBuilder, UrlMonitor } from 'checkly/constructs'

new UrlMonitor('content-site-eurohoops-url', {
  name: 'Content Site Eurohoops URL',
  activated: true,
  frequency: Frequency.EVERY_1M,
  locations: ['eu-west-1', 'eu-central-1'],
  request: {
    url: 'https://content-site-eurohoops.vercel.app/',
    followRedirects: true,
    assertions: [
      UrlAssertionBuilder.statusCode().lessThan(400),
    ],
  },
})
