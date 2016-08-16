
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

	createJob( data, callback ){

		console.log('new cron data', data)

		return this.$http({
			method: 'POST',
			withCredentials: true,
			url: 'http://localhost:8080/v1/jobs',
			data: data,
			headers: {
				'Content-Type': 'application/json'
			}
		})

	}

}