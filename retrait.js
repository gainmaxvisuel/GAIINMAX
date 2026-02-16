const formRetrait = document.getElementById("retraitForm");
const userIdRetrait = localStorage.getItem("userId");

formRetrait.addEventListener("submit", async (e) => {
    e.preventDefault();

    const montant = parseInt(document.getElementById("montantRetrait").value);
    if (!montant || montant <= 0) return alert("Montant invalide");

    const { data, error } = await supabase
        .from("users")
        .select("solde")
        .eq("id", userIdRetrait)
        .single();

    if (error) return alert("Erreur : " + error.message);
    if (data.solde < montant) return alert("Solde insuffisant");

    const nouveauSolde = data.solde - montant;

    const { error: updateError } = await supabase
        .from("users")
        .update({ solde: nouveauSolde })
        .eq("id", userIdRetrait);

    if (updateError) return alert("Erreur : " + updateError.message);

    alert("Demande de retrait envoyée !");
    window.location.href = "accueil.html";
});