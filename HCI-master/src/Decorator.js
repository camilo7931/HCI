function productPaella(name){
	this.name = name;
}

function decoratorNameProduct(product, descripcion){
	this. product = product;
	this.descripcion = descripcion;

	var allName = this.product.name + " " + descripcion;

	return allName
}


/*
function executeDecorator(item){
	for (var i = item.length - 1; i >= 0; i--) {
		productPaella(item[i])
	}
	console.log(item);
	return item;
}*/

function executeDecorator(item){

	var itemDecorate = [];
	for (var i = 0; i < item.length; i++) {
		var productName = new productPaella(item[i]);
		var decorated = new decoratorNameProduct( productName, "La mejor paella de la U")
		itemDecorate.push(decorated);
	}
	return itemDecorate;
}