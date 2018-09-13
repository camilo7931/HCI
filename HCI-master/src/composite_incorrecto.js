function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    this.arrayElements = [];
/*
this.compositeProto = function(){
            var objectComposite = {

                add: function(product){
                    console.log(product);
                    arrayElements.push(product);
                    return arrayElements;
                },

                remove: function (product){
                    arrayElements.split(0,arrayElements.length);
                    arrayElements.add(product);
                }
         }
        return objectComposite;
    }*/
}


shoppingCar.prototype = {
    add: function(product){
        this.arrayElements.push(product);
        console.log(this.arrayElements);
    },

    remove: function (arrayElements){
        this.arrayElements.splice(0, this.arrayElements.length);
        this.arrayElements.push(arrayElements);
                }

}


function buildShoppingCar( typeProduct, product){//tipo de producto, producto){
     var car = new shoppingCar(typeProduct); 
    for (var i = product.length - 1; i >= 0; i--) {
        car.add(product[i]);
    }
    return car;
    

    /*var car = new shoppingCar(typeProduct); 
    var resultCar;

    for (var i = product.length - 1; i >= 0; i--) {
        resultCar = car.compositeProto()car.add(product);
    }
    return resultCar;*/
}





    /*var carro = {
        tipoProducto: this.paellaType
        producto : paellaProduct}*/

