function cargarDatos() {
	//alert("Hola");
    var url = "https://valentina-03.github.io/jsons/laptops.json";
    fetch(url)
        .then(response => response.json())
        .then(data => generarLaptops(data))
        .catch(error => console.log("Error: " + error.message));
}

function generarLaptops(data) {
	var productos = document.querySelector("#productos");
	for(var i = 0; i<data.length; i++){
		var section = document.createElement("section");
		section.innerHTML = `
		<div class="row">
	        <div class="col-md-3 col-xs-6">
				<div class="product">
					<div class="product-img">
						<img src=${data[i].imagen}>
					</div>
					<div class="product-body">
						<p class="product-category">${data[i].marca}</p>
						<h3 class="product-name">${data[i].nombre}</h3>
						<h4 class="product-price">${data[i].precio}</h4>
						<p class="product-description">${data[i].descripcion}</p>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-xs-6">
				<div class="product">
					<div class="product-img">
						<img src=${data[++i].imagen}>
					</div>
					<div class="product-body">
						<p class="product-category">${data[i].marca}</p>
						<h3 class="product-name">${data[i].nombre}</h3>
						<h4 class="product-price">${data[i].precio}</h4>
						<p class="product-description">${data[i].descripcion}</p>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-xs-6">
				<div class="product">
					<div class="product-img">
						<img src=${data[++i].imagen}>
					</div>
					<div class="product-body">
						<p class="product-category">${data[i].marca}</p>
						<h3 class="product-name">${data[i].nombre}</h3>
						<h4 class="product-price">${data[i].precio}</h4>
						<p class="product-description">${data[i].descripcion}</p>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-xs-6">
				<div class="product">
					<div class="product-img">
						<img src=${data[++i].imagen}>
					</div>
					<div class="product-body">
						<p class="product-category">${data[i].marca}</p>
						<h3 class="product-name">${data[i].nombre}</h3>
						<h4 class="product-price">${data[i].precio}</h4>
						<p class="product-description">${data[i].descripcion}</p>
					</div>
				</div>
			</div>`;
	    productos.appendChild(section);	    
	}
}

cargarDatos();