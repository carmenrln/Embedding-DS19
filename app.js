console.log("Hello from B2S");

let viz;

// To do list:
// 1. Select the container in the html
// 2. Give the viz options (height and width)
// 3. Variable for the dashboard url

const vizContainer = document.getElementById("vizContainer");
const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
const vizOptions = {
  height: 800,
  width: 1000,
};

function initViz() {
  viz = new tableau.Viz(vizContainer, vizUrl, vizOptions);
}

// wait until the page has fully loaded, then show dashboard
document.addEventListener("DOMContentLoaded", initViz);

// Export PDF button
// Button element in your html
// Link the button to the JS
// Create the tableau function
// Add a listener to carry out the function when clicking the button

const exportPdf = document.getElementById("exportPdf");
function loadPdf() {
  viz.showExportPDFDialog();
  console.log("PDF export window loaded");
}
exportPdf.addEventListener("click", loadPdf);

const exportPpt = document.getElementById("exportPpt");
function loadPpt() {
  viz.showExportPowerPointDialog();
  console.log("PPT export window loaded");
}
exportPpt.addEventListener("click", loadPpt);
