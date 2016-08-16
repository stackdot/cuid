
const directiveTemplate = require('./job-history.tpl.html')

module.exports = () => {
	
	return {
		scope: {
			jobId: '@',
			historyId: '@'
		},
		restrict: 'E',
		replace: true,
		template: directiveTemplate,
		controller: 'jobHistoryCtrl',
		controllerAs: 'ctrl'
	}

}