// sidebar controller:

module.exports = ( $scope, sidebarService, jobListService ) => {

	console.log('constr')
	var self = this

	$scope.data = jobListService.data

}