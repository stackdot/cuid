

module.exports = class JobListService {
	constructor( $mdSidenav ){

		console.log('constuct new sidebar')
		this.$mdSidenav = $mdSidenav

	}
	close(){
		console.log('sidebar close')
		this.$mdSidenav("sidebar").toggle()
	}
}


