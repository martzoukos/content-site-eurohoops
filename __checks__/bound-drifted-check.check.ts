import { ApiCheck, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('bound-drifted-check', {
  name: '04 bound — drifted, file known',
  description: null,
  activated: false,
  muted: false,
  shouldFail: false,
  runParallel: false,
  locations: ['eu-west-1'],
  tags: ['drifted'],
  frequency: { frequency: 10, frequencyOffset: 46 },
  environmentVariables: [],
  request: {
    method: 'GET',
    url: 'https://httpbin.org/status/200',
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
  degradedResponseTime: 5000,
  maxResponseTime: 20000,
})
