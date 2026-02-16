const userId = localStorage.getItem("userId");
const soldeSpan = document.getElementById("solde");

// Afficher le solde actuel
async function afficherSolde() {
    if (!userId) return;
    const { data } = await supabase
        .from("users")
        .select("solde")
        .eq("id", userId)
        .single();

    soldeSpan.textContent = data ? data.solde + " FCFA" : "0 FCFA";
}

afficherSolde();

// Redirections vers recharge/retrait
document.getElementById("btnRecharge").addEventListener("click", () => {
    window.location.href = "recharge.html";
});

document.getElementById("btnRetrait").addEventListener("click", () => {
    window.location.href = "retrait.html";
});