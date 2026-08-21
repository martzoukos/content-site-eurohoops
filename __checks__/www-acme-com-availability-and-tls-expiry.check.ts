/**
* This is a Checkly CLI MultiStepCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#multistepcheck
*/

import { MultiStepCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new MultiStepCheck('www-acme-com-availability-and-tls-expiry', {
  name: 'www.acme.com availability and TLS expirya',
  activated: true,
  muted: false,
  shouldFail: false,
  runParallel: false,
  locations: ['us-east-1', 'eu-central-1'],
  tags: [],
  frequency: Frequency.EVERY_5M,
  environmentVariables: [],
  code: {
    entrypoint: './www-acme-com-availability-and-tls-expiry.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.fixedStrategy({
    baseBackoffSeconds: 0,
    maxRetries: 1,
    maxDurationSeconds: 600,
    sameRegion: false,
  }),
})
