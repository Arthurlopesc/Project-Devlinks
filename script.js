/*
 * Toggles the 'light' class on the root <html> element.
 *
 * This function gets a reference to the main <html> tag of the document.
 * It then uses the classList.toggle() method to add the 'light' class
 * if it's not present, or remove it if it is already present.
 * This is commonly used to switch between a light and dark theme.
 */
function toggleMode() {
  const html = document.documentElement; // Get the <html> element
  html.classList.toggle("light"); // Add 'light' class if missing, remove if present
}