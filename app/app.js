'use strict'


// 3rd party modules:
const angular = require('angular')
const router = require('angular-ui-router')
require('angular-animate')
require('angular-moment')
require('angular-aria')
require('angular-sanitize')
require('angular-material/angular-material')

var layoutTpl = require('./layout.tpl.html')


// Local modules:
require('modules/sidebar')
require('modules/job-list')
require('modules/job-info')
require('modules/create-job')
require('modules/job-history')


// Create App:
angular.module('app', [
	'ngMaterial',
	'angularMoment',
	'ui.router',
	'app.sidebar',
	'app.jobInfo',
	'app.jobHistory',
	'app.createJob',
	'app.jobList'
]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', function( $stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider ){

	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false,
	// 	rewriteLinks: false
	// });

	$mdThemingProvider.theme('default')
		.primaryPalette('blue')
		.accentPalette('green')

	// URL Routing:
	$stateProvider
		.state('jobs', {
			url: '/jobs',
			// abstract: true,
			template: layoutTpl,
		})
		.state('jobs.all', {
			url: '/all',
			views: {
				sidebar: {
					template: '<sidebar></sidebar>'
				},
				content: {
					template: '<job-list></job-list>'
				}
			}
		})
		.state('jobs.create', {
			url: '/create',
			views: {
				sidebar: {
					template: '<sidebar></sidebar>'
				},
				content: {
					template: '<create-job></create-job>'
				}
			}
		})
		.state('jobs.job', {
			url: '/:id',
			views: {
				sidebar: {
					template: '<sidebar></sidebar>'
				},
				content: {
					template: '<job-info job-id="{{jobId}}"></job-info>',
					controller: ['$scope', '$stateParams', function( $scope, $stateParams ){
						$scope.jobId = $stateParams.id
					}]
				}
			}
		})
		.state('jobs.job.history', {
			url: '/:historyId',
			views: {
				jobdetails: {
					template: '<job-history job-id="{{jobId}}" history-id="{{historyId}}"></job-history>',
					controller: ['$scope', '$stateParams', function( $scope, $stateParams ){
						$scope.jobId = $stateParams.id
						console.log('job history')
						$scope.historyId = $stateParams.historyId
					}]
				}
			}
		})
		
	$urlRouterProvider.otherwise('/jobs/all')

}])
.controller('app.main', ['$scope', '$state', function( $scope, $state ){

	console.log('Stackdot App Controller')

}])

