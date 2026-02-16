const formInscription = document.getElementById("inscriptionForm");

formInscription.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase
        .from("users")
        .insert([{ nom, email, password, solde: 1000 }]); // bonus initial 1000 FCFA

    if (error) {
        alert("Erreur : " + error.message);
    } else {
        alert("Inscription réussie !");
        window.location.href = "connexion.html";
    }
});