/**
 * This is a Checkly configuration file.
 *
 * See {@link https://www.checklyhq.com/docs/cli/project-structure/} for
 * more information.
 */

import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'Eurohoops Content Site',
  logicalId: 'eurohoops-content-site',
  checks: {
    checkMatch: '**/__checks__/**/*.check.ts',
    browserChecks: {
      testMatch: '**/__checks__/**/*.spec.ts',
    },
    tags: [
      'mac',
    ],
  },
})

export default config
