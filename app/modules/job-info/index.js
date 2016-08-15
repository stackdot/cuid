// job-info modules components:

const service = require('./services/job-info.service.js')
const controller = require('./controllers/job-info.ctrl.js')
const directive = require('./directives/job-info.directive.js')

module.exports = angular.module('app.jobInfo', [] )
	.service( 'jobInfoService', [ '$http', service ] )
	.controller( 'jobInfoCtrl', [ '$scope', 'jobInfoService', controller ] )
	.directive( 'jobInfo', [ directive ] )
