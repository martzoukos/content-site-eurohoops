/**
* This is a Checkly CLI BrowserCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
*/

import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('pr-3695-browser-check-min-io-artifacts', {
  name: 'PR-3695 Browser Check (MinIO artifacts)',
  activated: true,
  muted: true,
  shouldFail: false,
  runParallel: false,
  runtimeId: '2025.04',
  locations: ['eu-west-1'],
  tags: [],
  sslCheckDomain: '',
  frequency: Frequency.EVERY_10M,
  code: {
    entrypoint: './pr-3695-browser-check-min-io-artifacts.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.fixedStrategy({
    baseBackoffSeconds: 0,
    maxRetries: 1,
    maxDurationSeconds: 600,
    sameRegion: false,
  }),
})
