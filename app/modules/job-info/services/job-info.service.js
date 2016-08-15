
module.exports = class jobInfoService {
	constructor( $http ){
		this.$http = $http
		this.data = {
			job: {},
			history: []
		}
	}
	get( id, callback ){
		return this.$http({
			method: 'GET',
			withCredentials: true,
			url: 'http://localhost:8080/v1/jobs/'+id
		}).then(( res ) => {
			this.data.job = res.data
		}).catch(( err ) => {
			console.log('erro', err)
		})
	}

	getHistory( id, callback ){
		return this.$http({
			method: 'GET',
			withCredentials: true,
			url: 'http://localhost:8080/v1/jobs/'+id+'/history'
		}).then(( res ) => {
			this.data.history = res.data
		}).catch(( err ) => {
			console.log('erro', err)
		})
	}


}