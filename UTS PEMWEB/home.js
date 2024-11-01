// Array of possible home activities
const activities = [
    "Menyapu",
    "Merapikan kamar",
    "Mencuci piring",
    "Menonton film",
    "Membaca buku",
    "Menonton Anime",
    "Meditasi",
    "Olahraga",
    "Menyiram tanaman",
    "Membuat tugas",
    "Menggambar",
    "Bermain game",
    "Mendengarkan musik",
    "Mencuci baju",
    "Mencoba makeup",
    "Mengatur playlist musik",
    "Belajar",
    "Menjahit",
    "Memasak",
    "Memandikan anjing"
  ];
  
  function generateActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const randomActivity = activities[randomIndex];  
    document.getElementById("activityDisplay").textContent = randomActivity;
  }
  document.getElementById("generateBtn").addEventListener("click", generateActivity);
  