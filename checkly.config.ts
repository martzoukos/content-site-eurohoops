import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'Eurohoops Content Site',
  logicalId: 'eurohoops-content-site',
  checks: {
    checkMatch: '**/*.check.ts',
    browserChecks: {
      testMatch: '**/*.spec.ts',
    },
  },
})
