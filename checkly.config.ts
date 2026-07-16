import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'Simple uptime monitors',
  logicalId: 'simple-uptime-monitors',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    checkMatch: '**/*.check.ts',
    browserChecks: {
      testMatch: '**/*.spec.ts',
    },
  },
})
