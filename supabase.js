// Connexion à ta base Supabase GAINMAX
const supabaseUrl = "https://bokfeyczhzreolydjly.supabase.co"; // URL de ton projet
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJva2ZleXljemh6cmVvbHlkamx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExODgzMDksImV4cCI6MjA4Njc2NDMwOX0.V18FDSX7pLukL8xcqLz1SiCuwSNZnus-RXQoVyJ9LUs"; // clé ANON
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
