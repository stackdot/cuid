
const directiveTemplate = require('./job-info.tpl.html')

module.exports = () => {
	
	return {
		scope: {
			jobId: '@'
		},
		restrict: 'E',
		replace: true,
		template: directiveTemplate,
		controller: 'jobInfoCtrl',
		controllerAs: 'ctrl'
	}

}