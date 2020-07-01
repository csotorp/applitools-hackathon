const rgs = {
    main: () => cy.get('main'),
    tools: () => rgs.main().find('.toolbox')
}

const els = {
    bannerDiv: () => rgs.main().find('.top_banner'),

    sortSel: () => rgs.tools().find('select#sort'),
    filtersIco: () => rgs.tools().find('i.ti-filter'),
    filtersLbl: () => rgs.tools().find('.open_filters span'),
    gridViewIco: () => rgs.tools().find('i.ti-view-grid'),
    listViewIco: () => rgs.tools().find('i.ti-view-list')
}

export const main = {

    shouldShowBanner() {
        els.bannerDiv().should('be.visible') 
    },

    shouldShowOptions(options) {
        options.sort ? els.sortSel().should('be.visible').find(':selected').should('contain.text', 'Sort by popularity')
                     : els.sortSel().should('not.be.visible');
        options.filters ? els.filtersIco().should('be.visible') : els.filtersIco().should('not.be.visible');
        options.filters && options.filtersLbl ? els.filtersLbl().should('be.visible').and('have.text', 'Filters') 
                                              : els.filtersLbl().should('not.be.visible');
        if (options.viewSwithcer) {
            els.gridViewIco().should('be.visible');
            els.listViewIco().should('be.visible');
        } else{
            els.gridViewIco().should('not.be.visible');
            els.listViewIco().should('not.be.visible');
        }
    }

}