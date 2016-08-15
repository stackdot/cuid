
const directiveTemplate = require('./sidebar.tpl.html')

module.exports = () => {

	console.log('return directive')
	
	return {
		scope: { },
		restrict: 'E',
		replace: true,
		template: directiveTemplate,
		controller: 'sidebarCtrl',
		controllerAs: 'ctrl'
	}

}