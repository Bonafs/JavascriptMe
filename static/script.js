// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Chart.js Visualization
function renderChart() {
    let chartCanvas = document.getElementById("chartCanvas");
    if (chartCanvas) {
        let ctx = chartCanvas.getContext("2d");
        new Chart(ctx, {
            type: 'bar',
            data: { labels: ["A", "B", "C", "D"], datasets: [{ label: "Data Points", data: [12, 19, 3, 5] }] }
        });
    } else {
        console.warn("Chart canvas not found.");
    }
}

// Smooth Animations
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.add("fade-in"));
});

// Initialize Chart
renderChart();