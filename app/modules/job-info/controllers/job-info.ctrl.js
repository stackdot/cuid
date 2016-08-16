// job-info controller:

const PrettyCron = require('prettycron')
const lodash = require('lodash')

module.exports = ( $scope, $state, jobInfoService ) => {

	var self = this

	$scope.data = jobInfoService.data

	jobInfoService.get( $scope.jobId, ( res )=> {
	})

	jobInfoService.getHistory( $scope.jobId, ( res )=> {
	})

	$scope.nextRun = () => {
		if( lodash.isEmpty( $scope.data.job.cron ) ) return ''
		return PrettyCron.getNext( $scope.data.job.cron )
	}

	$scope.prettyCron = () => {
		if( lodash.isEmpty( $scope.data.job.cron ) ) return ''
		return PrettyCron.toString( $scope.data.job.cron )
	}

	$scope.updateEnabled = () => {
		console.log('update job')
		jobInfoService.update( $scope.data.job._id, $scope.data.job ).catch(( err ) => {
			console.log('update err', err)
		})
	}

	$scope.deleteJob = () => {
		console.log('Delete Job')

		jobInfoService.deleteJob( $scope.jobId ).then(( res ) => {
			console.log('deleted job', res)
			$state.go('jobs.all', {}, { reload: true })
		}).catch(( err ) => {
			console.log('delete job err', err)
		})	
	}

}