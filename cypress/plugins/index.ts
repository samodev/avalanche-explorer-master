/**
 * Rather then have a bunch of configs for each environment we simply
 * create a object here, dynamically change it based on various environment variables
 * and pass it to cypress just before it starts.
 */
const CYPRESS_BASE_CONFIG = {
  nodeVersion: "system",
};

const CYPRESS_CONFIG_PROD = {
    ...CYPRESS_BASE_CONFIG,
    baseUrl: 'https://explorer-xp.avax.network/',
}

const CYPRESS_CONFIG_LOCAL = {
  ...CYPRESS_BASE_CONFIG,
  baseUrl: `${!process.env.USE_HTTP ? "http" : "https"}://localhost:8080/`,
};

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = () => {
  return process.env.runProduction ? CYPRESS_CONFIG_PROD : CYPRESS_CONFIG_LOCAL;
};
