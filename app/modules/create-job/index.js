// create-job modules components:

const service = require('./services/create-job.service.js')
const controller = require('./controllers/create-job.ctrl.js')
const directive = require('./directives/create-job.directive.js')

module.exports = angular.module('app.createJob', [] )
	.service( 'createJobService', [ '$http', service ] )
	.controller( 'createJobCtrl', [ '$scope', 'createJobService', controller ] )
	.directive( 'createJob', [ directive ] )
