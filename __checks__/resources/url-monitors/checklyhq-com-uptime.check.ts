import { AlertChannel, AlertEscalationBuilder, Frequency, RetryStrategyBuilder, UrlAssertionBuilder, UrlMonitor } from 'checkly/constructs'

new UrlMonitor('checklyhq-com-uptime-zUqp0hpF', {
  name: 'checklyhq.com uptime',
  activated: true,
  locations: [
    'us-east-1',
    'eu-west-1',
  ],
  frequency: Frequency.EVERY_1M,
  alertChannels: [
    AlertChannel.fromId(271972),
    AlertChannel.fromId(296371),
    AlertChannel.fromId(304968),
    AlertChannel.fromId(304980),
    AlertChannel.fromId(306237),
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
