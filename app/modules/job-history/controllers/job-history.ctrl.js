// job-history controller:

module.exports = ( $scope, jobHistoryService ) => {

	var self = this

	$scope.data = jobHistoryService.data

	jobHistoryService.get( $scope.jobId, $scope.historyId )

	$scope.jsonDump = () => {
		return JSON.stringify( $scope.data.history.data, null, 4 )
	}

}