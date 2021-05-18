class Forecast{
    constructor(){
        this.key = 'bzKSEC5hLKPiJ1uSWshR1AIsJuPBAByk'
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city) //podemos usar as functions aqui, porque foi forecast,js definida antes do app.js no index.html
        const weather = await this.getWeather(cityDets.Key)

        return { cityDets, weather } //return a object wich contains 2 properties
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`  //query we will make, sempre que é usado o ? depois do url é porque será feito uma query, ?var1=a&var2=b
        const response = await fetch(this.cityURL + query)
        const data = await response.json()

        return data[0]
    }
    async getWeather(citykey){
        const query = `${citykey}?apikey=${this.key}`
        const response = await fetch(this.weatherURL + query)
        const data = await response.json()

        return data[0]
    }
}




    
