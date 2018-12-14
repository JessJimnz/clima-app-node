
const axios = require ('axios');


const getClima = async (lat, lng) => {


		let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ac7090070ff94a9e1eacf825257abe8c`)

		return resp.data.main.temp;


//	if(resp.data.status === 'ZERO_RESULTS'){
//			throw new Error (`No hay resultados para la ciudad ${direccion}`);

//		}
}
module.exports = {
	getClima
}