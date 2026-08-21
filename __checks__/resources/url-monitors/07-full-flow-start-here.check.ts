/**
* This is a Checkly CLI ApiCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#apicheck
*/

import { ApiCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('07-full-flow-start-here', {
  name: '07 full flow — start here',
  activated: false,
  muted: false,
  shouldFail: false,
  runParallel: false,
  locations: ['eu-west-1'],
  tags: [],
  frequency: Frequency.EVERY_10M,
  // group: your check belongs to group 'Export Sync Test States',
  maxResponseTime: 20000,
  degradedResponseTime: 5000,
  request: {
    url: 'https://httpbin.org/status/200',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [],
    body: ``,
    bodyType: 'NONE',
    headers: [],
    queryParameters: [],
  },
  retryStrategy: RetryStrategyBuilder.fixedStrategy({
    baseBackoffSeconds: 0,
    maxRetries: 1,
    maxDurationSeconds: 600,
    sameRegion: false,
  }),
})
