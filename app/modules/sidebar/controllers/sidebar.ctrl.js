// sidebar controller:

module.exports = ( $scope, sidebarService, jobListService ) => {

	var self = this

	$scope.data = jobListService.data

	jobListService.get()

}