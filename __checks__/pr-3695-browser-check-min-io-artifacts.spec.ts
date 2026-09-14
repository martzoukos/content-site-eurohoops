const { test, expect } = require("@playwright/test")

test("danube webshop loads", async ({ page }) => {
  const response = await page.goto("https://danube-webshop.herokuapp.com/")
  expect(response.status()).toBeLessThan(400)
  await page.screenshot({ path: "home.jpg" })
})
