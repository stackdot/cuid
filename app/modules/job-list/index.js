// job-list modules components:

const service = require('./services/job-list.service.js')
const controller = require('./controllers/job-list.ctrl.js')
const directive = require('./directives/job-list.directive.js')

module.exports = angular.module('app.jobList', [] )
	.service( 'jobListService', [ '$http', service ] )
	.controller( 'jobListCtrl', [ '$scope', 'jobListService', 'sidebarService', controller ] )
	.directive( 'jobList', [ directive ] )
