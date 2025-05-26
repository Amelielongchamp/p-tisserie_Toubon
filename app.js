fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let produit = ""

        afficherProduits(data.produits)
        afficherSevices(data.services)
        afficherTemoignages(data.temoignages)
 afficherNosProduitsPhares(data.Phares)
 afficheravantagesClients(data.avantagesClients)


    });



function afficherProduits(tableauProduits) {
    tableauProduits.forEach(produit => {

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

}

function afficherSevices(tableauServices) {
    tableauServices.forEach(service => {

        //modifie mes cartes nos services//
        document.getElementById("carte-services").innerHTML += `

 <div class="card margBottom">
            <div class="card-image">
                <img src="${service.image}" alt="">
                <div class="card-description">
                    <p>${service.description} </p>
                </div>
                <h3 class="parisienne1">${service.nom}</h3>

            </div>
        </div>

`
    });
}

function afficherNosProduitsPhares(tableauPhares){
    tableauPhares.forEach(Phare=>{

        //modifie mes cartes nos produits phares//
        document.getElementById("carte-nosProduitsPhares").innerHTML +=`
        
            <div class="card ">
        <div class="card-image">
            <img src="${Phare.image}" alt="">
            <div class="card-description">
                <p>${Phare.description} </p>
            </div>
            <h3 class="parisienne1">${Phare.nom}</h3>

        </div>
    </div>
`
    })
}


function afficherTemoignages(tableauTemoignages){
tableauTemoignages.forEach(temoignage => {

    //modifie mes temoignages//
    
    document.getElementById("carte-temoignages").innerHTML += `
     <section class="container2 justify-between">
     <div>
        
                <h4 class="containerh4-1">${temoignage.prenom}</h4>
                <div>
                <p>${temoignage.note}★</p>
                </div>
                <div>
                <p class="margin10">${temoignage.typeExperience}
                </div>
            <div>
                <p class="margin10">${temoignage.commentaire}</p>
            </div>
            
            </div>
    </section>
    `});
}


//etoiles pour les temoignages //
let etoile= "★".repeat(note)+"☆".repeat(5-note)

//Avantages clients //

function afficheravantagesClients (tableauAvantagesClients){
    tableauAvantagesClients.forEach(avantage =>{

//modifie mes avantages clients //
document.getElementById("carte-avantages").innerHTML +=`
 <div class="w30">
            <img src="${tableauAvantages.image}" alt="">
       <p>${tableauAvantages.description}</p>
        
        </div>
`
})
}