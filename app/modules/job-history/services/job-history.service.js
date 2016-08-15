
module.exports = class jobHistoryService {
	constructor( $http ){
		this.$http = $http
		this.data = {
			history: {}
		}
	}
	get( id, historyId, callback ){
		return this.$http({
			method: 'GET',
			withCredentials: true,
			url: 'http://localhost:8080/v1/jobs/'+id+'/history/'+historyId
		}).then(( res )=>{
			console.log('res', res)
			this.data.history = res.data
			// callback( res.data )
		}).catch(( err )=>{
			console.log('Err', err)
		})
	}
}