function calculateCumGPA() {
    // Get input values
    const prevGPA = parseFloat(document.getElementById("prevGPA").value);
    const prevHours = parseFloat(document.getElementById("prevHours").value);
    const currentGPA = parseFloat(document.getElementById("currentGPA").value);
    const currentHours = parseFloat(document.getElementById("currentHours").value);

    // Validate input
    if (
        isNaN(prevGPA) || isNaN(prevHours) ||
        isNaN(currentGPA) || isNaN(currentHours) ||
        prevHours < 0 || currentHours < 0
    ) {
        alert("Please enter valid positive numbers in all fields.");
        return;
    }

    // Calculate cumulative GPA
    const totalPoints = (prevGPA * prevHours) + (currentGPA * currentHours);
    const totalHours = prevHours + currentHours;
    const cumulativeGPA = totalPoints / totalHours;

    // Show result in modal
    const modal = document.getElementById("myModal");
    const result = document.getElementById("result");
    result.textContent = `Your cumulative GPA is: ${cumulativeGPA.toFixed(2)}`;
    modal.style.display = "block";
}

// Modal close logic
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
