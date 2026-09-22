import { ApiCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('missing-source-file-check', {
  name: '05 bound — missing source file_',
  activated: false,
  muted: false,
  shouldFail: false,
  runParallel: false,
  locations: ['eu-west-1'],
  tags: [],
  frequency: Frequency.EVERY_10M,
  degradedResponseTime: 5000,
  maxResponseTime: 20000,
  request: {
    method: 'GET',
    url: 'https://httpbin.org/status/200',
    body: '',
    bodyType: 'NONE',
    headers: [],
    queryParameters: [],
    followRedirects: true,
    skipSSL: false,
    assertions: [],
  },
  retryStrategy: RetryStrategyBuilder.fixedStrategy({
    baseBackoffSeconds: 0,
    maxRetries: 1,
    maxDurationSeconds: 600,
    sameRegion: false,
  }),
})
