// create-job controller:

// const Later = require('later')
const PrettyCron = require('prettycron')
const lodash = require('lodash')

module.exports = ( $scope, $state, createJobService ) => {

	var self = this

	$scope.cron = {
		name: 'New Cron',
		description: 'My new cron description',
		cron: '0,30 * * * *'
	}
	$scope.meta = {
		auth: {
			registry: 'docker.infra.tstllc.net',
			user: 'drone',
			password: 'drone',
			email: 'drone@tstllc.net'
		},
		image: 'node:6.3.1',
		cmd: 'npm install express -g'
	}

	$scope.parseText = () => {
		if( lodash.isEmpty( $scope.cron.cron ) ) return ''
		return PrettyCron.toString( $scope.cron.cron )
	}

	$scope.submitForm = () => {
		console.log('submit form')
		let data = $scope.cron
		data.meta = {}
		data.meta.executor = $scope.meta

		data.meta.executor.cmd = $scope.meta.cmd.split(' ')
		createJobService.createJob( data )
			.then(( res ) => {
				console.log('create done', res)
				$state.go('jobs.all', { reload: true })
			})
	}

}