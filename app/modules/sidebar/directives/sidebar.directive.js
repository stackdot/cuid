
const directiveTemplate = require('./sidebar.tpl.html')

module.exports = () => {
	
	return {
		scope: { },
		restrict: 'E',
		replace: true,
		template: directiveTemplate,
		controller: 'sidebarCtrl',
		controllerAs: 'ctrl'
	}

}