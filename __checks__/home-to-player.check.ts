import {
  BrowserCheck,
  Frequency,
  RetryStrategyBuilder,
} from 'checkly/constructs'
import * as path from 'node:path'
import { euroleagueGroup } from './euroleague-content.group'

new BrowserCheck('journey-home-to-player', {
  name: 'Journey · Home → Team → Player',
  group: euroleagueGroup,
  frequency: Frequency.EVERY_10M,
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    maxRetries: 2,
    baseBackoffSeconds: 30,
  }),
  code: {
    entrypoint: path.join(__dirname, 'home-to-player.spec.ts'),
  },
})
