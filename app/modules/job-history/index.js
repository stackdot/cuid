// job-history modules components:

const service = require('./services/job-history.service.js')
const controller = require('./controllers/job-history.ctrl.js')
const directive = require('./directives/job-history.directive.js')



module.exports = angular.module('app.jobHistory', [ 'ngSanitize' ] )
	.service( 'jobHistoryService', [ '$http', service ] )
	.controller( 'jobHistoryCtrl', [ '$scope', 'jobHistoryService', controller ] )
	.directive( 'jobHistory', [ directive ] )
