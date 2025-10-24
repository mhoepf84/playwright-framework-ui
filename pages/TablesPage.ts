import { Locator, Page } from "@playwright/test";

export class TablesPage {
    readonly tablesPage: Page;
    readonly tablesRow: Locator;
    readonly tablesTable: Locator;
    readonly tablesRankSort: Locator;
    readonly tablesCountrySort: Locator;
    readonly tablesPopSort: Locator;
    readonly tablesSearch: Locator;
    readonly tablesRowsPerPage: Locator;
    readonly tablesNextPage: Locator;
    readonly tablesPrevPage: Locator;
    readonly tablesOnePage: Locator;
    readonly tablesTwoPage: Locator;
    readonly tablesThreePage: Locator;
    readonly tablesRowCheck: Locator;


    constructor(page: Page) {
        this.tablesPage = page;
        
        // Elements - Page-specific. Listed in order of test spec-file
        this.tablesRow = page.getByRole('cell')
        this.tablesTable = page.locator('#tablepress-1')
        this.tablesRankSort = page.getByText('Rank')
        this.tablesCountrySort = page.getByText('Country')
        this.tablesPopSort = page.getByText('Population (million)')
        this.tablesSearch = page.getByRole('searchbox', { name: 'Search:' })
        this.tablesRowsPerPage = page.getByLabel('entries per page')
        this.tablesNextPage = page.getByRole('link', { name: 'Next' })
        this.tablesPrevPage = page.getByRole('link', { name: 'Previous' })
        this.tablesOnePage = page.getByRole('link', { name: '1' })
        this.tablesTwoPage = page.getByRole('link', { name: '2' })
        this.tablesThreePage = page.getByRole('link', { name: '3' })

        // See comment in 04_Tables.spec.ts
        this.tablesRowCheck = page.locator('xpath=/html/body/div[1]/div[2]/div/div/main/div/article/div/div[1]/div[2]/div/table/tbody/tr[1]')

    }
    }


