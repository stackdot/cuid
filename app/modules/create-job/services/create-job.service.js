
module.exports = class createJobService {
	constructor( $http ){
		console.log('New Service')
		this.$http = $http
	}
	get( callback ){
		return this.$http({
			method: 'GET',
			withCredentials: true,
			url: 'api_url'
		}).then(( res )=>{
			callback( res.data )
		}).catch(( err )=>{
			console.log('Err', err)
		})
	}
}