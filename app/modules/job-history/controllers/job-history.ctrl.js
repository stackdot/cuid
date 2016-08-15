// job-history controller:

module.exports = ( $scope, jobHistoryService ) => {

	var self = this

	$scope.data = jobHistoryService.data

	jobHistoryService.get( $scope.jobId, $scope.historyId )

}