export default {
	dummy() {
		FindCountry.run().then(() => {
			FindUsersFromCountry.run().then(() => {
				// query dependent on FindUsersFromCountry
			});
		});
	},

	async fetchDataUsingCountries() {
		try {
			const countries = await FindCountry.run();
			const usersFromCountry = await FindUsersFromCountry.run({
				country: countries[0].country //"Australis", "Brazil", etc
			});
			return usersFromCountry;
		}
		catch (e) {
			console.log(e)
		}
	}
}