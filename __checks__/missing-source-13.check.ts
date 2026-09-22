/**
* This is a Checkly CLI ApiCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#apicheck
*/

import { ApiCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('missing-source-13', {
  name: '13 bound — missing source file, twin for a second tab',
  activated: false,
  muted: false,
  shouldFail: false,
  runParallel: false,
  locations: ['eu-west-1'],
  tags: [],
  frequency: Frequency.EVERY_10M,
  environmentVariables: [],
  maxResponseTime: 20000,
  degradedResponseTime: 5000,
  request: {
    method: 'GET',
    url: 'https://httpbin.org/status/200',
    body: '',
    bodyType: 'NONE',
    headers: [],
    queryParameters: [],
    skipSSL: false,
    followRedirects: true,
    maxHops: 30,
    assertions: [],
  },
  retryStrategy: RetryStrategyBuilder.fixedStrategy({
    baseBackoffSeconds: 0,
    maxRetries: 1,
    maxDurationSeconds: 600,
    sameRegion: false,
  }),
})
