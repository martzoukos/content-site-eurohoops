import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'content-site-eurohoops',
  logicalId: 'content-site-eurohoops',
  repoUrl: 'https://github.com/martzoukos/content-site-eurohoops',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    checkMatch: '**/*.check.ts',
    browserChecks: { testMatch: '**/*.spec.ts' },
  },
})
