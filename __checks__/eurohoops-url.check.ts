import { UrlMonitor, Frequency } from 'checkly/constructs'

new UrlMonitor('eurohoops-content-site-url-monitor', {
  name: 'Eurohoops Content Site - URL Monitor',
  url: 'https://content-site-eurohoops.vercel.app/',
  frequency: Frequency.EVERY_30S,
  locations: ['us-east-1', 'eu-west-1'],
  assertions: [
    {
      source: 'STATUS_CODE' as any,
      comparison: 'EQUALS' as any,
      target: '200',
    },
  ],
})
