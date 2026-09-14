/**
* This is a Checkly CLI BrowserCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
*/

import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('www-acme-com-http-200-and-tls-expiry', {
  name: 'www.acme.com HTTP 200 and TLS expiry',
  activated: true,
  muted: false,
  shouldFail: false,
  runParallel: false,
  locations: ['us-east-1', 'eu-central-1'],
  tags: ['acme', 'tls', 'http-200'],
  frequency: Frequency.EVERY_5M,
  environmentVariables: [],
  code: {
    entrypoint: './www-acme-com-http-200-and-tls-expiry.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.fixedStrategy({
    baseBackoffSeconds: 0,
    maxRetries: 1,
    maxDurationSeconds: 600,
    sameRegion: false,
  }),
})
