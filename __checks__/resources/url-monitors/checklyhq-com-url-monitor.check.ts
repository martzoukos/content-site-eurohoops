import { AlertChannel, AlertEscalationBuilder, Frequency, RetryStrategyBuilder, UrlAssertionBuilder, UrlMonitor } from 'checkly/constructs'

new UrlMonitor('checklyhq-com-url-monitor-2Ptdpqz4', {
  name: 'checklyhq.com URL monitor',
  activated: true,
  locations: [
    'us-east-1',
    'eu-west-1',
  ],
  frequency: Frequency.EVERY_1M,
  alertChannels: [
    AlertChannel.fromId(1),
    AlertChannel.fromId(38),
    AlertChannel.fromId(39),
    AlertChannel.fromId(49),
  ],
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1, {
    amount: 0,
    interval: 5,
  }, {
    enabled: false,
    percentage: 10,
  }),
  retryStrategy: RetryStrategyBuilder.noRetries(),
  degradedResponseTime: 3000,
  maxResponseTime: 5000,
  request: {
    url: 'https://checklyhq.com',
    ipFamily: 'IPv4',
    assertions: [
      UrlAssertionBuilder.statusCode().equals(200),
    ],
  },
})
