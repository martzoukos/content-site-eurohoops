import { expect, test } from '@playwright/test'

test('acme.com returns HTTP 200', async ({ page }) => {
  const response = await page.goto('https://acme.com', { waitUntil: 'domcontentloaded' })

  expect(response, 'Expected https://acme.com to return a response').not.toBeNull()
  expect(response!.status()).toBe(200)
})
