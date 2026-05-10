import {
  Frequency,
  RetryStrategyBuilder,
  UrlAssertionBuilder,
  UrlMonitor,
} from 'checkly/constructs'
import { PRODUCTION_URL, euroleagueGroup } from './euroleague-content.group'

type Target = {
  id: string
  name: string
  path: string
  frequency: Frequency
}

const targets: Target[] = [
  { id: 'home', name: 'Home (/)', path: '/', frequency: Frequency.EVERY_1M },
  { id: 'about', name: 'About (/about)', path: '/about', frequency: Frequency.EVERY_5M },
  { id: 'history-index', name: 'History index (/history)', path: '/history', frequency: Frequency.EVERY_5M },
  { id: 'teams-index', name: 'Teams index (/teams)', path: '/teams', frequency: Frequency.EVERY_5M },
  { id: 'players-index', name: 'Players index (/players)', path: '/players', frequency: Frequency.EVERY_5M },
  { id: 'teams-real-madrid', name: 'Team detail · Real Madrid', path: '/teams/real-madrid', frequency: Frequency.EVERY_5M },
  { id: 'players-diamantidis', name: 'Player detail · Diamantidis', path: '/players/dimitris-diamantidis', frequency: Frequency.EVERY_5M },
  { id: 'history-origins', name: 'History article · Origins', path: '/history/origins', frequency: Frequency.EVERY_5M },
]

for (const target of targets) {
  new UrlMonitor(`availability-${target.id}`, {
    name: `Availability · ${target.name}`,
    group: euroleagueGroup,
    frequency: target.frequency,
    degradedResponseTime: 1500,
    maxResponseTime: 5000,
    retryStrategy: RetryStrategyBuilder.singleRetry(),
    request: {
      url: `${PRODUCTION_URL}${target.path}`,
      followRedirects: true,
      assertions: [UrlAssertionBuilder.statusCode().equals(200)],
    },
  })
}
