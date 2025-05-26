fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let produit = ""
        data.produits.forEach(produit => {

            //modifie chaques carte produits//   
            document.getElementById("carte-produits").innerHTML += `
    
        <div class="card margBottom">
            <div class="card-image">
                <img src="${produit.image}" alt="">
                <div class="card-description">
                    <p>${produit.description} </p>
                </div>
                <h3 class="parisienne1">${produit.nom}</h3>

            </div>
        </div>
    `
        });

        let service = ""
        data.services.forEach(service => {

            //modifie mes cartes nos services//
            document.getElementById("carte-services").innerHTML += `

 <div class="card margBottom">
            <div class="card-image">
                <img src="asssets/gateau sur messur.jpg" alt="">
                <div class="card-description">
                    <p>${service.description} </p>
                </div>
                <h3 class="parisienne1">${service.nom}</h3>

            </div>
        </div>

`  
});
