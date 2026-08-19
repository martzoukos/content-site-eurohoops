import { AlertChannel, AlertEscalationBuilder, Frequency, MultiStepCheck, RetryStrategyBuilder } from 'checkly/constructs'

new MultiStepCheck('www-acme-com-availability-and-tls-expiry-UFSPnJNb', {
  name: 'www.acme.com availability and TLS expiry',
  code: {
    entrypoint: './www-acme-com-availability-and-tls-expiry.spec.ts',
  },
  activated: true,
  locations: [
    'us-east-1',
    'eu-central-1',
  ],
  frequency: Frequency.EVERY_5M,
  alertChannels: [
    AlertChannel.fromId(1),
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
