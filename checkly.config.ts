import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'checklyhq.com monitoring',
  logicalId: 'checklyhq-com-monitoring',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    checkMatch: '**/*.check.ts',
    browserChecks: {
      testMatch: '**/*.spec.ts',
    },
  },
})
