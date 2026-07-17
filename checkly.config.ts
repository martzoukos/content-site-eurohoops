import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'ChecklyHQ uptime monitoring',
  logicalId: 'checklyhq-uptime-monitoring',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    checkMatch: '**/*.check.ts',
  },
})
