const btn = document.getElementById('toggle-dark');
btn.onclick = () => {
  document.body.classList.toggle('dark');
  btn.textContent = document.body.classList.contains('dark') ? '☀️ Modo claro' : '🌙 Modo oscuro';
};
