const formRetrait = document.createElement("form");
formRetrait.innerHTML = `
    <label>Montant à retirer :</label>
    <input type="number" id="montantRetrait" required>
    <button type="submit">Retirer</button>
`;
document.body.appendChild(formRetrait);

formRetrait.addEventListener("submit", async (e) => {
    e.preventDefault();

    const montant = parseInt(document.getElementById("montantRetrait").value);

    const { data: userData, error: fetchError } = await supabase
        .from("users")
        .select("solde")
        .eq("id", userId)
        .single();

    if (fetchError) return alert("Erreur : " + fetchError.message);
    if (montant > userData.solde) return alert("Solde insuffisant");

    const { data, error } = await supabase
        .from("users")
        .update({ solde: userData.solde - montant })
        .eq("id", userId);

    if (error) {
        alert("Erreur retrait : " + error.message);
    } else {
        alert("Retrait effectué !");
        window.location.href = "accueil.html";
    }
});
