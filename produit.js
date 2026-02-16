const listeProduitsDiv = document.getElementById("listeProduits");

async function afficherProduits() {
    const { data, error } = await supabase
        .from("produits")
        .select("*");

    if (error) return listeProduitsDiv.textContent = "Erreur chargement produits";

    data.forEach(produit => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.margin = "10px";
        div.style.padding = "10px";
        div.style.borderRadius = "10px";
        div.innerHTML = `<h3>${produit.nom}</h3><p>Prix : ${produit.prix} FCFA</p>`;
        listeProduitsDiv.appendChild(div);
    });
}

afficherProduits();