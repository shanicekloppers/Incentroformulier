
function getAPIdata() {

	fetch('https://www.postcodeapi.nu/account/dashboard/?token=cad5f5a9-2f84-467d-a5ec-029476bc7125')
	
	// parse to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// render 
	.then(function(response) {

		// render 
		onAPISucces(response);
	})
	
	// catch error
	.catch(function (error) {
		// onAPIError();
		console.error('Request failed', error);
	});
}


function onAPISucces(response) {

