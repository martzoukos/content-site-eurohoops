/**
* This is a Checkly CLI ApiCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#apicheck
*/

import { ApiCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('orphan-scan-11', {
  name: '11 bound — no source file, scan finds nothing → Ask Rocky',
  description: null,
  activated: false,
  muted: false,
  shouldFail: false,
  runParallel: false,
  locations: ['eu-west-1'],
  tags: [],
  frequency: Frequency.EVERY_10M,
  environmentVariables: [],
  request: {
    url: 'https://httpbin.org/status/200',
    method: 'GET',
    ipFamily: 'IPv4',
    followRedirects: true,
    skipSSL: false,
    body: '',
    bodyType: 'NONE',
    headers: [],
    queryParameters: [],
    assertions: [],
  },
  retryStrategy: RetryStrategyBuilder.fixedStrategy({
    baseBackoffSeconds: 0,
    maxRetries: 1,
    maxDurationSeconds: 600,
    sameRegion: false,
  }),
  maxResponseTime: 20000,
  degradedResponseTime: 5000,
})
