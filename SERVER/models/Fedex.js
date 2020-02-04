const Empresa = require('../interface/interface');

module.exports = class Fedex extends Empresa {
	constructor(empresa){
		this.empresa = empresa,
		this.tiempo = "3 dias"
	}

	enviar(){

		return data = {
			empresa: this.empresa,
			tiempo: this.tiempo
		}
	}
}