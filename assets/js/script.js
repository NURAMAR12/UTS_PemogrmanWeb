// Fungsi untuk validasi login
function validateLogin() {
  console.log("Fungsi validateLogin dipanggil!"); // Log untuk debugging

  // Mengambil nilai username dan password dari form login
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Mengambil data username dan password yang disimpan di localStorage
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  // Validasi login
  if (username === storedUsername && password === storedPassword) {
    alert("Login berhasil! Anda akan diarahkan ke halaman utama.");
    window.location.href = "index.html"; // Arahkan ke halaman utama setelah login
  } else if (username === "" || password === "") {
    alert("Harap isi username dan password.");
  } else {
    alert("Username atau password salah!");
  }
}

// Fungsi untuk validasi registrasi
function validateRegistration() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("register-confirm-password").value;

  if (username === "" || password === "" || confirmPassword === "") {
    alert("Harap isi semua kolom.");
  } else if (password !== confirmPassword) {
    alert("Password dan konfirmasi password tidak sama.");
  } else {
    // Simpan data pengguna di localStorage setelah registrasi berhasil
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registrasi berhasil! Silakan login.");
    toggleForm(); // Kembali ke form login setelah registrasi berhasil
  }
}

// Fungsi untuk beralih antara form login dan registrasi
function toggleForm() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const formTitle = document.getElementById("form-title");
  const toggleLink = document.getElementById("toggleFormLink");

  // Mengecek form mana yang aktif dan beralih
  if (loginForm.style.display === "block") {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    formTitle.textContent = "Registrasi";
    toggleLink.textContent = "Sudah punya akun? Login";
  } else {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    formTitle.textContent = "Login";
    toggleLink.textContent = "Belum punya akun? Registrasi";
  }
}
