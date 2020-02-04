const Empresa = require('../interface/interface');

module.exports = class CEcuador extends Empresa {
	constructor(empresa,tiempo){
		this.empresa = empresa,
		this.tiempo = tiempo
	}

	enviar(){

		return data = {
			empresa: this.empresa,
			tiempo: this.tiempo
		}
	}
}