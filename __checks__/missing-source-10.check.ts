import { ApiCheck, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('missing-source-10', {
  name: '10 bound — missing source file → Ask Rocky',
  activated: false,
  muted: false,
  shouldFail: false,
  runParallel: false,
  locations: ['eu-west-1'],
  tags: [],
  frequency: {
    frequency: 10,
    frequencyOffset: 100,
  },
  environmentVariables: [],
  request: {
    url: 'https://httpbin.org/status/200',
    method: 'GET',
    ipFamily: 'IPv4',
    followRedirects: true,
    skipSSL: false,
    assertions: [],
    body: '',
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
  degradedResponseTime: 5000,
  maxResponseTime: 20000,
})
