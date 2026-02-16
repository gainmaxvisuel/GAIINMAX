const userIdMoi = localStorage.getItem("userId");
const nomSpan = document.getElementById("nomUtilisateur");
const emailSpan = document.getElementById("emailUtilisateur");
const soldeSpanMoi = document.getElementById("soldeUtilisateur");
const historiqueDiv = document.getElementById("historiqueTransactions");

async function afficherProfil() {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userIdMoi)
        .single();

    if (error || !data) return alert("Erreur chargement profil");

    nomSpan.textContent = data.nom;
    emailSpan.textContent = data.email;
    soldeSpanMoi.textContent = data.solde + " FCFA";
}

async function afficherHistorique() {
    const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", userIdMoi)
        .order("created_at", { ascending: false });

    if (error) return historiqueDiv.textContent = "Erreur chargement historique";

    data.forEach(tx => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.padding = "8px";
        div.style.margin = "5px 0";
        div.style.borderRadius = "8px";
        div.textContent = `${tx.type.toUpperCase()} : ${tx.montant} FCFA - ${new Date(tx.created_at).toLocaleString()}`;
        historiqueDiv.appendChild(div);
    });
}

afficherProfil();
afficherHistorique();