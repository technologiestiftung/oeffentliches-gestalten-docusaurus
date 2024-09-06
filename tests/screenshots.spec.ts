import * as fs from "fs";
import { test, expect } from '@playwright/test';
import {extractSitemapPathnames } from './utils';


// Constants
const siteUrl = 'http://localhost:3000';
const sitemapPath = './build/sitemap.xml';
const stylesheetPath = './tests/screenshot.css';
const stylesheet = fs.readFileSync(stylesheetPath).toString();

function screenshotPathname(pathname: string) {
  test(`pathname ${pathname}`, async ({page}) => {
    const url = siteUrl + pathname;
    await page.goto(url);
    await page.addStyleTag({content: stylesheet});

    while (await page.getAttribute('html','data-has-hydrated') !== 'true') {
      await page.waitForTimeout(50);
    }

    await expect(page).toHaveScreenshot({ fullPage: true });
  });
}

test.describe('Docusaurus site screenshots', () => {
  const pathnames = extractSitemapPathnames(sitemapPath);
  pathnames.forEach(screenshotPathname);
});