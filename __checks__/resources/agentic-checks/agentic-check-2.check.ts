import { AgenticCheck, AlertEscalationBuilder, Frequency } from 'checkly/constructs'

new AgenticCheck('agentic-check-2-z8Ft8xkJ', {
  name: 'Agentic Check #2',
  prompt: 'test',
  activated: false,
  locations: [
    'us-east-1',
  ],
  frequency: Frequency.EVERY_30M,
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1, {
    amount: 0,
    interval: 5,
  }, {
    enabled: false,
    percentage: 10,
  }),
})
