//const axios = require('axios');
const lugar = require ('./lugar/lugar');
const clima = require ('./clima/clima');

const argv = require('yargs').options ({
	direccion: {
		alias: 'd',
		desc: 'Direccion de la ciudad para obtener el clima',
		demand: true
	}
}).argv;



let getInfo = async (direccion) => {


	try {

		let coors = await lugar.getLugarLatLng (argv.direccion); //se puede hacer un await porque regresa una promesa	 
		let temp = await clima.getClima( coors.lat, coors.lng); //se puede hacer un await porque reguesa una promesa

		return `El clima en ${coors.direccion} es de ${temp}`;

	}
	catch (e) {

		return `No se pudo determinar el clima en ${direccion}`;
	}
	
 }



getInfo(argv.direccion)
	.then(mensaje => console.log(mensaje))
	.catch(e => console.log(e));

//con el return de arriba ya no tenemos por que usar el siguiente codigo

/* lugar.getLugarLatLng (argv.direccion)
	.then(resp => {
		console.log(resp);
	})
	
	.catch(e => console.log(e));



clima.getClima(37.3382082,-121.8863286)
	.then(temp => {
		console.log(temp);
	})
	
	.catch(e => console.log(e));*/
