
const Interface = require('../interface/interface');

module.exports = class Envio {
	constructor(){
		this.empresa = new Interface();
	}

	set setEnvio(empres){
		this.empresa.enviar();
	};
}