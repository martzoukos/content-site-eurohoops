import { expect, test } from '@playwright/test'

test('docs.acme.com returns HTTP 200', async ({ page }) => {
  const response = await page.goto('https://docs.acme.com', { waitUntil: 'domcontentloaded' })

  expect(response, 'Expected https://docs.acme.com to return a response').not.toBeNull()
  expect(response!.status()).toBe(200)
})
