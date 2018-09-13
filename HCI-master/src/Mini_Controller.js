/*Esta funcion permite obtener el valor del select de html(onchange)*/
let originalPrice;
let ivaCalculate;
let menuItems = [ "carne y pollo", "vegetales", "Maricos"];

var arr = [];

function getValueType (paellaType){
	this.paellaType = paellaType;
	if(arr.length != 0){
		band = true
		for (var i = arr.length - 1; i >= 0; i--) {
			if(arr[i] == paellaType.value){
				arr.splice(i,i+1);
				band = false
			}
		}
		if(band){
			arr.push(paellaType.value)
		}
	}
	else{
		arr.push(paellaType.value)
	}	
	
}

function getValuePrice(paellaPrice){

	this.paellaPrice = paellaPrice;
	ivaCalculate = Math.round((this.paellaPrice.value * 19) / 100);
	originalPrice = this.paellaPrice.value - ivaCalculate;
}

function getValueCoin(typeCoin){
	this.typeCoin = typeCoin;
}


var paellas = [];

function buildPaella(){

	/*Construccion de paella*/
	var factory = executeFactory(this.paellaType.value);
	var paellaProduct = generatePaella(factory.type);
	console.log(paellaProduct);

	/*llamamdo a patrones de diseño prototype y singleton*/
	var buildBase = produceBase(); //prototype
	var executeSingle = executeSingleton();
	console.log(buildBase);
	console.log(executeSingle);

	console.log(arr)

	/*validacion de tipo de moneda para llamado del adaptador*/
	if(this.typeCoin.value == "dolar"){
		console.log("Precio en dolares con iva " + new CalculatePriceDolar().newCalculateDolar(originalPrice));
	}else if(this.typeCoin.value == "euro"){
		console.log("Precio en dolares con iva " + new CalculatePriceEuro().newCalculateEuro(originalPrice));
	}


	console.log("Precio Original " + originalPrice);
	console.log("Precio Iva " + ivaCalculate);

	var Carrito = new buildShoppingCar(factory.type, arr);
	console.log(Carrito);

	var decorator = new executeDecorator(menuItems);
	console.log(decorator);

}