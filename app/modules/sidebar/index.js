// sidebar modules components:

const controller = require('./controllers/sidebar.ctrl.js')
const directive = require('./directives/sidebar.directive.js')
const service = require('./services/sidebar.service.js')


module.exports = angular.module('app.sidebar', [] )
	.service('sidebarService', [ '$mdSidenav', service ])
	.controller( 'sidebarCtrl', [ '$scope', 'sidebarService', 'jobListService', controller ] )
	.directive( 'sidebar', [ directive ] )
