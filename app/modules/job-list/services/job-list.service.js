
module.exports = class JobListService {
	constructor( $http ){

		this.$http = $http
		this.data = {
			jobs: []
		}

		// this.get()

	}
	get(){
		return this.$http({
			method: 'GET',
			withCredentials: true,
			url: 'http://localhost:8080/v1/jobs'
		}).then(( res )=>{
			console.log('res', res)
			this.data.jobs = res.data
		}).catch(( err )=>{
			console.log('err', err)
		})
	}
}