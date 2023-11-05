import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { parse } from 'papaparse';

// type CsvData = {
//   Name: string;
//   Type: string;
//   Stage: string;
//   Heatlh: number;
//   CharacterImage: string;
//   AbilityOneName: string;
//   AbiltityOneDescription: string;
//   AbilityOneCost: number;
//   AbilityOneDamage: number;
//   AbilityTwoName: string;
//   AbiltityTwoDescription: string;
//   AbilityTwoCost: number;
//   AbilityTwoDamage: number;
//   Location: string;
//   WorkEnvironment: string;
//   Availability: string;
//   CharacterMeta: string;
//   CharacterDescription: string;
//   Illustrator: string;
//   Company: string;
//   Cardnumber: number;
// };

// parse<CsvData>(csvFileContent, {
//   header: true,
//   dynamicTyping: true,
//   complete: (results) => {
//     test('Fill Card Form', async ({ page }) => {
//       const url = 'http://localhost:4200/';
//       await page.goto(url);
//       console.log(results.data[0].Name);
//       await page.getByLabel('Name', { exact: true }).fill(results.data[0].Name);
//       await page.locator('#mat-select-0').click();
//       await page
//         .locator(`mat-option:has-text("${results.data[0].Type}")`)
//         .click();
//       //selectOption(results.data[0].Type);
//       await page
//         .getByLabel('Stage', { exact: true })
//         .fill(results.data[0].Stage);
//       await page
//         .getByLabel('Health', { exact: true })
//         .fill(results.data[0].Heatlh.toString()); //
//       console.log(results.data[0].CharacterImage);
//       await page
//         .getByLabel('Image Url', { exact: true })
//         .fill(results.data[0].CharacterImage);
//       await page
//         .locator(
//           '#cdk-accordion-child-0 > mat-action-row > button > span.mat-mdc-button-touch-target'
//         )
//         .click();
//       await page.locator('#mat-input-4').fill(results.data[0].AbilityOneName);
//       console.log(results.data[0].AbiltityOneDescription);
//       await page
//         .locator('#mat-input-5')
//         .fill(results.data[0].AbiltityOneDescription); //
//       await page.locator('#mat-select-2').click();
//       await page
//         .locator(`mat-option:has-text("${results.data[0].AbilityOneCost}")`)
//         .click();
//       await page
//         .locator('#mat-input-6')
//         .fill(results.data[0].AbilityOneDamage.toString());
//       await page
//         .locator(
//           '#cdk-accordion-child-1 > mat-action-row > button > span.mat-mdc-button-touch-target'
//         )
//         .click();
//       await page.locator('#mat-input-7').fill(results.data[0].AbilityTwoName);
//       console.log(results.data[0].AbiltityTwoDescription);
//       await page
//         .locator('#mat-input-8')
//         .fill(results.data[0].AbiltityTwoDescription); //
//       await page.locator('#mat-select-4').click();
//       await page
//         .locator(`mat-option:has-text("${results.data[0].AbilityTwoCost}")`)
//         .click();
//       await page
//         .locator('#mat-input-9')
//         .fill(results.data[0].AbilityTwoDamage.toString());
//       await page;
//       await page
//         .locator(
//           '#cdk-accordion-child-2 > mat-action-row > button > span.mat-mdc-button-touch-target'
//         )
//         .click();
//       await page
//         .getByLabel('Location', { exact: true })
//         .fill(results.data[0].Location);
//       await page
//         .getByLabel('Work Environment', { exact: true })
//         .fill(results.data[0].WorkEnvironment);
//       await page
//         .getByLabel('Availability', { exact: true })
//         .fill(results.data[0].Availability);
//       await page
//         .locator(
//           '#cdk-accordion-child-3 > mat-action-row > button > span.mat-mdc-button-touch-target'
//         )
//         .click();
//       await page
//         .getByLabel('UpperText', { exact: true })
//         .fill(results.data[0].CharacterMeta); // change UpperText to CharacterMeta
//       await page
//         .getByLabel('LowerText', { exact: true })
//         .fill(results.data[0].CharacterDescription); // change LowerText to CharacterDescription
//       await page
//         .getByLabel('Illustrator', { exact: true })
//         .fill(results.data[0].Illustrator);
//       await page
//         .getByLabel('Company', { exact: true })
//         .fill(results.data[0].Company);
//       await page
//         .getByLabel('CardNumber', { exact: true })
//         .fill(results.data[0].Cardnumber.toString()); //
//     });
//   },
// });

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole('heading', { name: 'Installation' })
//   ).toBeVisible();
// });
