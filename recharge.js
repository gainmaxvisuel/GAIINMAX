const formRecharge = document.getElementById("rechargeForm");
const userIdRecharge = localStorage.getItem("userId");

formRecharge.addEventListener("submit", async (e) => {
    e.preventDefault();

    const montant = parseInt(document.getElementById("montantRecharge").value);
    if (!montant || montant <= 0) return alert("Montant invalide");

    // Récupérer le solde actuel
    const { data, error } = await supabase
        .from("users")
        .select("solde")
        .eq("id", userIdRecharge)
        .single();

    if (error) return alert("Erreur : " + error.message);

    const nouveauSolde = data.solde + montant;

    // Mettre à jour le solde
    const { error: updateError } = await supabase
        .from("users")
        .update({ solde: nouveauSolde })
        .eq("id", userIdRecharge);

    if (updateError) return alert("Erreur : " + updateError.message);

    alert("Recharge réussie !");
    window.location.href = "accueil.html";
});