import { defineConfig } from 'checkly'
import { Frequency } from 'checkly/constructs'

export default defineConfig({
  projectName: 'Eurohoops Content Site',
  logicalId: 'eurohoops-content-site',
  checks: {
    activated: true,
    frequency: Frequency.EVERY_5M,
    locations: ['eu-west-1', 'us-east-1', 'ap-southeast-1'],
    tags: ['eurohoops', 'production'],
    checkMatch: '**/__checks__/**/*.check.ts',
    ignoreDirectoriesMatch: ['node_modules/**', '.next/**'],
    playwrightConfig: {
      use: {
        baseURL: 'https://content-site-eurohoops.vercel.app',
      },
    },
    browserChecks: {
      frequency: Frequency.EVERY_10M,
      testMatch: '**/__checks__/**/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'eu-west-1',
    retries: 0,
  },
})
