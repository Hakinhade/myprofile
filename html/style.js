const hour = new Date().getHours();

let greetings;
if (hour < 12) {
    greetings = "Good Morning.!";

} else if (hour < 17) {
    greetings = "Good Afternoon.!";

} else {
    greetings = "Good Evening.!";

}

document.getElementById("greeting").textContent = greetings;



// To display the 'DAY'
switch (new Date().getDay()) {
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    
    }
    document.getElementById("day").textContent = day;
    
    
    switch (new Date().getMonth()) {
        case 0:
        month = "January";
        break;
        case 1:
        month = "February";
        break;
        case 2:
        month = "March";
        break;
        case 3:
        month = "April";
        break;
        case 4:
        month = "May";
        break;
        case 5:
        month = "June";
        break;
        case 6:
        month = "July";
        break;
        case 7:
        month = "August";
        break;
        case 8:
        month = "September";
        break;
        case 9:
        month = "October";
        break;
        case 10:
        month = "November";
        break;
        case 11:
        month = "December";
    }
        document.getElementById("month").textContent = month;

    
        switch (new Date().getYear()) {
            case 0:
            year = "2025";
            break;
            case 1:
            year = "2026";
            break;
            case 2:
            year = "2027";
            break;
            case 3:
            year = "2028";
            break;
            case 4:
            year = "2029";
            break;
            case 5:
            year = "2030";
            break;
            case 6:
            year = "2031";
            break;
            case 7:
            year = "2032";
            break;
            case 8:
            year = "2033";
            break;
            case 9:
            year = "2034";
            break;
            case 10:
            year = "2035";
            break;
            case 11:
            year = "2036";
            break;
            case 12:
            year = "2037";
            break;
            case 13:
            year = "2038";
            break;
            case 14:
            year = "2039";
            break;
            case 15:
            year = "2040";

        }
            document.getElementById("year").textContent = year;


// Wait until the page is loaded
function validationForm(){
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let phone_num = document.getElementById("phone").value;
    let errorMessage = document.getElementById("errorMessage");

        errorMessage.innerHTML = "";
        document.getElementById('errorMessage').style.color = 'red'

    if (name.length <=5) {
        errorMessage.innerHTML = "First name must be more than five character long.";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errorMessage.innerHTML = "Enter a valid email address.";
        return false;
    }

    if (phone_num.length !==11 || isNaN(phone_num)) {
        errorMessage.innerHTML = "Enter a valid 11-digit number.";
        return false;
    }

    alert("Form submitted successfully!")
        return true;
}







function validationForm() {
    let isValid = true;

    // Get values
    let name = document.getElementById("fname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Clear old errors
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    // Name validation
    if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById("fnameError").innerText = "Please enter a valid full name.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone validation
    let phonePattern = /^[0-9]{7,15}$/;
    if (phone === "" || !phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must be 7–15 digits.";
        isValid = false;
    }

    // Subject validation
    if (subject === "") {
        document.getElementById("subjectError").innerText = "Please enter a subject.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerText = "Please enter your message.";
        isValid = false;
    }

    // Success
    if (isValid) {
        alert("Submitted successfully!");
    }

    return isValid; // Prevent form submission if invalid
}

// ✅ Live error removal when typing
document.addEventListener("DOMContentLoaded", () => {
    const fields = [
        { id: "fname", errorId: "fnameError" },
        { id: "email", errorId: "emailError" },
        { id: "phone", errorId: "phoneError" },
        { id: "subject", errorId: "subjectError" },
        { id: "message", errorId: "messageError" }
    ];

    fields.forEach(field => {
        let inputEl = document.getElementById(field.id);
        let errorEl = document.getElementById(field.errorId);

        inputEl.addEventListener("input", () => {
            errorEl.innerText = ""; // clear error while typing
        });
    });
});


