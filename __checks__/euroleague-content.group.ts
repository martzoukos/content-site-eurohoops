import {
  AlertEscalationBuilder,
  CheckGroupV2,
  EmailAlertChannel,
} from 'checkly/constructs'

export const PRODUCTION_URL = 'https://content-site-eurohoops.vercel.app'

export const emailAlert = new EmailAlertChannel('eurohoops-email', {
  address: 'spiros@checklyhq.com',
  sslExpiry: true,
})

export const euroleagueGroup = new CheckGroupV2('euroleague-content', {
  name: 'Euroleague Content Site',
  activated: true,
  locations: ['eu-west-1', 'us-east-1', 'ap-southeast-1'],
  runParallel: true,
  tags: ['eurohoops', 'production'],
  alertChannels: [emailAlert],
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(
    1,
    { amount: 0, interval: 5 },
    { enabled: false, percentage: 10 },
  ),
})
