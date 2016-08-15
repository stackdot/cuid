// job-info controller:

module.exports = ( $scope, jobInfoService ) => {

	var self = this

	$scope.data = jobInfoService.data

	jobInfoService.get( $scope.jobId, ( res )=> {
	})

	jobInfoService.getHistory( $scope.jobId, ( res )=> {
	})

}