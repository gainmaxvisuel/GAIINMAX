const formConnexion = document.getElementById("connexionForm");

formConnexion.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single();

    if (error || !data) {
        alert("Email ou mot de passe incorrect");
    } else {
        // Stocker l'ID de l'utilisateur dans le localStorage pour le retrouver
        localStorage.setItem("userId", data.id);
        window.location.href = "accueil.html";
    }
});