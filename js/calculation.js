/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//gpa calculation
function calculateGPA() {
    // Initialize variables to store total GPA points and total credit hours
    let totalGPA = 0;
    let totalHours = 0;

    // Get all the course and grade select elements
    const courses = document.querySelectorAll('.courseandmark');

    // Loop through all the courses
    courses.forEach(function (course) {
        let creditHours = parseFloat(course.querySelector('#creditHours').value);
        let grade = parseFloat(course.querySelector('#grade').value);

        // Check if both credit hours and grade are selected
        if (creditHours && grade) {
            totalGPA += creditHours * grade;  // Add the GPA points for this course
            totalHours += creditHours;  // Add the credit hours
        }
    });

    // Calculate GPA (if totalHours is greater than 0 to avoid division by zero)
    let finalGPA = totalHours > 0 ? totalGPA / totalHours : 0;

    // Display the result in the modal
    document.getElementById("result").innerText = `Your GPA for this semester is:
    
     ${finalGPA.toFixed(2)}`;
}


// Modal functionality
var modal = document.getElementById("myModal");
var btn = document.getElementById("calculatebtn");
var span = document.getElementsByClassName("close")[0];

// Open the modal when the calculate button is clicked
btn.onclick = function() {
    calculateGPA();  // Call the GPA calculation function
    modal.style.display = "block";  // Show the modal
}

// Close the modal when the user clicks on the close button
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
