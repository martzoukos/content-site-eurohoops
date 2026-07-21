import { expect, test } from '@playwright/test'

test('homepage loads and identifies Checkly', async ({ page }) => {
  await page.goto(process.env.ENVIRONMENT_URL ?? 'https://www.checklyhq.com')

  await expect(page).toHaveTitle(/Checkly/i)
  await expect(page.getByRole('link', { name: /login/i }).first()).toBeVisible()
  await expect(page.locator('body')).toContainText(/monitoring|synthetic|Checkly/i)
})
