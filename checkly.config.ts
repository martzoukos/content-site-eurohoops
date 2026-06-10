import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'content-site-eurohoops',
  logicalId: 'content-site-eurohoops',
  checks: {
    checkMatch: '**/*.check.ts',
    tags: [],
    runtimeId: '2024.02',
    browserChecks: {
      testMatch: '**/*.spec.ts',
    },
  },
})
