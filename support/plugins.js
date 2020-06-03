// ***********************************************************
// support/plugins.js can be used to load plugins.
//
// Location was changed using 'pluginsFile' configuration option.
//
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
}

require('@applitools/eyes-cypress')(module);
