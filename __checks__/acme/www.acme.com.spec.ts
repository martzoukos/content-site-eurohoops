import { expect, test } from '@playwright/test'

test('www.acme.com returns HTTP 200', async ({ page }) => {
  const response = await page.goto('https://www.acme.com', { waitUntil: 'domcontentloaded' })

  expect(response, 'Expected https://www.acme.com to return a response').not.toBeNull()
  expect(response!.status()).toBe(200)
})
