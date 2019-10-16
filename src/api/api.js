/**
 * @module free-climb-sdk/api
 */

var accounts = require('./accounts/index')
var applications = require('./applications/index')
var phoneNumbers = require('./phoneNumbers/index')
var calls = require('./calls/index')
var conferences = require('./conferences/index')
var queues = require('./queues/index')
var logs = require('./logs/index')
var recordings = require('./recordings/index')
var messages = require('./messages/index')
var requester = require('./requester/index')

/**
 * @typedef API
 * @type {Object}
 * @property {module:free-climb-sdk/api/accounts} accounts - The Accounts module
 * @property {module:free-climb-sdk/api/applications} applications - The Applications module
 * @property {module:free-climb-sdk/api/availableNumbers} availableNumbers - The Available Numbers module
 * @property {module:free-climb-sdk/api/incomingNumbers} incomingNumbers - the Incoming Numbers module
 * @property {module:free-climb-sdk/api/callingNumbers} callingNumbers - the Calling Numbers module
 * @property {module:free-climb-sdk/api/calls} calls - the Calls module
 * @property {module:free-climb-sdk/api/conferences} conferences - the Conferences module
 * @property {module:free-climb-sdk/api/queues} queues - the Queues module
 * @property {module:free-climb-sdk/api/logs} logs - the Logs module
 * @property {module:free-climb-sdk/api/recordings} recordings - the Recordings module
 */

/**
 * The API module exposes all the FreeClimb API endpoints
 * @param {string} accountId - the accountId for authentication
 * @param {string} authToken - the authToken for authentication
 * @returns {API} API - the modules for each individual set of endpoints
 */
function api (accountId, authToken) {
  return {
    accounts: accounts(accountId, authToken),
    applications: applications(accountId, authToken),
    availableNumbers: phoneNumbers.availableNumbers(accountId, authToken),
    incomingNumbers: phoneNumbers.incomingNumbers(accountId, authToken),
    callingNumbers: phoneNumbers.callingNumbers(accountId, authToken),
    calls: calls(accountId, authToken),
    conferences: conferences(accountId, authToken),
    queues: queues(accountId, authToken),
    logs: logs(accountId, authToken),
    recordings: recordings(accountId, authToken),
    messages: messages(accountId, authToken),
    setPersyUrl: requester.setPersyUrl
  }
}

module.exports = api
