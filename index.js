const form = document.getElementById("inscriptionForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // empêche la page de se recharger
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase
    .from("users")
    .insert([{ username: username, password: password, solde: 1000 }]);

  if (error) {
    alert("Erreur : " + error.message);
  } else {
    alert("Compte créé avec succès !");
    window.location.href = "connexion.html"; // redirection après inscription
  }
});
