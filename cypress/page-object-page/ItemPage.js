
/// <reference types="cypress" />

import BasePage from "./BasePage.js";

class ItemPage extends BasePage {


    get backToProductsButton() {
        return cy.get('button#back-to-products');
    }
    get productName() {
        return cy.get('[data-test="inventory-item-name"]');
    }
    get productDescription() {
        return cy.get('[data-test="inventory-item-desc"]');
    }
    get productImg() {
        return cy.get('[alt="Sauce Labs Backpack"]');
    }
    get productPrice() {
        return cy.get('[data-test="inventory-item-price"]');
    }

    get addToCartButton() {
        return cy.get('button#add-to-cart');
    }
    get removeToCartButton() {
        return cy.get('button#remove');
    }

    clickAddToCartButton() {
        this.addToCartButton.click();
    }

    clickRemoveToCartButton() {
        this.removeToCartButton.click();
    }

}

export default new ItemPage();