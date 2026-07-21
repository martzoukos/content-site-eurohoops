import { AlertChannel, AlertEscalationBuilder, BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('checkly-hq-homepage-browser-OPNVvSO6', {
  name: 'ChecklyHQ homepage browser',
  code: {
    entrypoint: './checkly-hq-homepage-browser.spec.ts',
  },
  activated: true,
  locations: [
    'us-east-1',
    'eu-west-1',
  ],
  frequency: Frequency.EVERY_5M,
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
})
