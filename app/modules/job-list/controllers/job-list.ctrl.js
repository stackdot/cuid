// job-list controller:

module.exports = ( $scope, jobListService, sidebarService ) => {

	console.log('constr')
	var self = this
	$scope.data = jobListService.data

	$scope.sidebar = () => {
		console.log('sidebar')
		sidebarService.close()
	}


	$scope.itemClick = ( e ) => {
		console.log('item click')
		return false
	}

}