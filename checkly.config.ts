import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'Content Site Eurohoops',
  logicalId: 'content-site-eurohoops',
  checks: {
    checkMatch: '**/*.check.ts',
    browserChecks: {
      testMatch: '**/*.spec.ts',
    },
  },
})
