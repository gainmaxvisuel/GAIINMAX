// Récupération de l'utilisateur connecté
const userId = localStorage.getItem("userId");

async function afficherSolde() {
    if (!userId) return;

    const { data, error } = await supabase
        .from("users")
        .select("solde")
        .eq("id", userId)
        .single();

    if (error) {
        alert("Erreur lors de la récupération du solde : " + error.message);
    } else {
        document.getElementById("solde").innerText = data.solde;
    }
}

// Appel initial pour afficher le solde
afficherSolde();

// Gestion des boutons
document.getElementById("rechargeBtn").addEventListener("click", () => {
    window.location.href = "recharge.html"; // page recharge
});

document.getElementById("retraitBtn").addEventListener("click", () => {
    window.location.href = "retrait.html"; // page retrait
});

document.getElementById("bonusBtn").addEventListener("click", () => {
    window.location.href = "bonus.html"; // page code bonus
});
