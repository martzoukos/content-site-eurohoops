import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'ChecklyHQ Website Monitoring',
  logicalId: 'checklyhq-website-monitoring',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    checkMatch: '**/*.check.ts',
    browserChecks: {
      testMatch: '**/*.spec.ts',
    },
  },
})
