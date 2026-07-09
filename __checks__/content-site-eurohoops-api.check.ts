import { ApiCheck, AssertionBuilder, Frequency } from 'checkly/constructs'

new ApiCheck('content-site-eurohoops-api', {
  name: 'Content Site Eurohoops API',
  activated: true,
  frequency: Frequency.EVERY_1M,
  locations: ['eu-west-1'],
  request: {
    method: 'GET',
    url: 'https://content-site-eurohoops.vercel.app/',
    followRedirects: true,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
    ],
  },
})
