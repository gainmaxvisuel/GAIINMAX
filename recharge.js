const formRecharge = document.createElement("form");
formRecharge.innerHTML = `
    <label>Montant à recharger :</label>
    <input type="number" id="montant" required>
    <button type="submit">Recharger</button>
`;
document.body.appendChild(formRecharge);

formRecharge.addEventListener("submit", async (e) => {
    e.preventDefault();

    const montant = parseInt(document.getElementById("montant").value);

    if (!userId || montant <= 0) return;

    const { data, error } = await supabase
        .from("users")
        .update({ solde: supabase.raw("solde + ?", [montant]) })
        .eq("id", userId);

    if (error) {
        alert("Erreur recharge : " + error.message);
    } else {
        alert("Recharge effectuée !");
        window.location.href = "accueil.html";
    }
});
