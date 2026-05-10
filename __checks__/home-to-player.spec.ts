import { expect, test } from '@playwright/test'

const LCP_BUDGET_MS = 2500

test('home → teams → real madrid → player detail', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', { name: /Sixty-five years of Euroleague/i }),
  ).toBeVisible()

  await page.getByRole('link', { name: 'Teams', exact: true }).first().click()
  await expect(page).toHaveURL(/\/teams\/?$/)
  await expect(page.getByRole('heading', { name: 'Teams', level: 1 })).toBeVisible()
  await expect(page.getByRole('link', { name: /Real Madrid/ })).toBeVisible()
  await expect(page.getByRole('link', { name: /Panathinaikos/ })).toBeVisible()
  await expect(page.getByRole('link', { name: /CSKA/ })).toBeVisible()

  await page.getByRole('link', { name: /Real Madrid/ }).click()
  await expect(page).toHaveURL(/\/teams\/real-madrid$/)
  await expect(page.getByRole('heading', { name: 'Real Madrid', level: 1 })).toBeVisible()
  await expect(page.getByText('WiZink Center').first()).toBeVisible()
  await expect(page.getByText('1931').first()).toBeVisible()

  await page.goto('/players/dimitris-diamantidis')
  await expect(
    page.getByRole('heading', { name: 'Dimitris Diamantidis', level: 1 }),
  ).toBeVisible()
  await expect(page.getByText(/Defensive Player of the Year/i).first()).toBeVisible()

  const lcp = await page.evaluate(
    () =>
      new Promise<number>((resolve) => {
        let last = 0
        const observer = new PerformanceObserver((entries) => {
          for (const entry of entries.getEntries()) {
            last = entry.startTime
          }
        })
        observer.observe({ type: 'largest-contentful-paint', buffered: true })
        setTimeout(() => {
          observer.disconnect()
          resolve(last)
        }, 1500)
      }),
  )

  expect(lcp, `LCP on /players/dimitris-diamantidis was ${lcp.toFixed(0)}ms`).toBeLessThan(
    LCP_BUDGET_MS,
  )
})
