
const directiveTemplate = require('./job-list.tpl.html')

module.exports = () => {
	
	return {
		scope: { },
		restrict: 'E',
		replace: true,
		template: directiveTemplate,
		controller: 'jobListCtrl',
		controllerAs: 'ctrl'
	}

}