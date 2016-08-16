

module.exports = class JobListService {
	constructor( $mdSidenav ){
		this.$mdSidenav = $mdSidenav
	}
	close(){
		this.$mdSidenav("sidebar").toggle()
	}
}


