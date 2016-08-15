
const directiveTemplate = require('./create-job.tpl.html')

module.exports = () => {
	
	return {
		scope: { },
		restrict: 'E',
		replace: false,
		template: directiveTemplate,
		controller: 'createJobCtrl',
		controllerAs: 'ctrl'
	}

}