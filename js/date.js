/* Actualizar el año de los derechos */
function updateYear() {
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.getElementById('copyright');
  copyrightElement.textContent = `${currentYear}`
}
window.onload = updateYear;