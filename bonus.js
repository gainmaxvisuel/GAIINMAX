const formBonus = document.createElement("form");
formBonus.innerHTML = `
    <label>Entrez le code bonus :</label>
    <input type="text" id="codeBonus" required>
    <button type="submit">Valider</button>
`;
document.body.appendChild(formBonus);

// Exemple : un code valide par jour
const codeValide = "GAINMAX10"; // tu peux changer chaque jour

formBonus.addEventListener("submit", async (e) => {
    e.preventDefault();
    const code = document.getElementById("codeBonus").value;

    if (!userId) return;

    if (code === codeValide) {
        // ajoute 10% du solde actuel
        const { data: userData } = await supabase
            .from("users")
            .select("solde")
            .eq("id", userId)
            .single();

        const bonus = Math.floor(userData.solde * 0.1);

        await supabase
            .from("users")
            .update({ solde: userData.solde + bonus })
            .eq("id", userId);

        alert(`Bonus appliqué ! +${bonus} F`);
        window.location.href = "accueil.html";
    } else {
        alert("Code invalide !");
    }
});