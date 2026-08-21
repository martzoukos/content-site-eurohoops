import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'content-site-eurohoops',
  logicalId: 'content-site-eurohoops-2',
  checks: {
    checkMatch: '__checks__/**/*.check.ts',
  },
})

export default config
