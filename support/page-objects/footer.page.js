const rgs = {
    footer: () => cy.get('footer'),

    quickLinksClp: () => rgs.footer().find('.collapse').first(),
    contactsClp: () => rgs.footer().find('.collapse').eq(1),
    keepInTouchClp: () => rgs.footer().find('.collapse').last()
}

const els = {
    quickLinksLbl: () => rgs.footer().find('h3').first(),
    contactsLbl: () => rgs.footer().find('h3').eq(1),
    keepInTouchLbl: () => rgs.footer().find('h3').last(),

    quickLinksLst: () => rgs.quickLinksClp().find('ul'),
    contactsLst: () => rgs.contactsClp().find('ul'),
    newsletterIpt: () => rgs.keepInTouchClp().find('input#email_newsletter'),
    newsletterBtn: () => rgs.keepInTouchClp().find('button#submit-newsletter'),

    langSel: () => rgs.footer().find('.lang-selector select'),
    currencySel: () => rgs.footer().find('.currency-selector select'),

    additionalLinksLst: () => rgs.footer().find('ul.additional_links')
}

export const footer = {

    shouldShowCollapsibles(status) {
        els.quickLinksLbl().should('be.visible').and('have.text', 'Quick Links');
        els.contactsLbl().should('be.visible').and('have.text', 'Contacts');
        els.keepInTouchLbl().should('be.visible').and('have.text', 'Keep in touch');
        if (status && status.expanded) {
            els.quickLinksLst().should('be.visible').children().should('have.length', 6);
            els.contactsLst().should('be.visible').children().should('have.length', 2);
            els.newsletterIpt()
                .should('be.visible')                
                .and('have.attr', 'placeholder', 'Your email')
                .and('have.value', '');
            els.newsletterBtn().should('be.visible').and('be.enabled');
        } else {
            rgs.quickLinksClp().should('not.be.visible');
            rgs.contactsClp().should('not.be.visible');
            rgs.keepInTouchClp().should('not.be.visible');
        }
    },

    shouldShowLocalization() {
        els.langSel().should('be.visible').find(':selected').should('contain.text', 'English');
        els.currencySel().should('be.visible').find(':selected').should('contain.text', 'US Dollars');
    },

    shouldShowAdditionalLinks() {
        els.additionalLinksLst().should('be.visible').children().should('have.length', 3);
    }

}