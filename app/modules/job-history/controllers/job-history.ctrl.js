// job-history controller:

const stripAnsi = require('strip-ansi')
const lodash = require('lodash')

module.exports = ( $scope, jobHistoryService ) => {

	var self = this

	$scope.data = jobHistoryService.data

	jobHistoryService.get( $scope.jobId, $scope.historyId )

	$scope.jsonDump = () => {
		return JSON.stringify( $scope.data.history.data, null, 4 )
	}

	$scope.cleanedLogs = () => {
		let items = lodash.map( $scope.data.history.logs, ( log ) => {
			return stripAnsi( log )
		})
		items = lodash.reject( items, ( item ) => lodash.isEmpty(item) )
		return items.join('\n')
	}

}