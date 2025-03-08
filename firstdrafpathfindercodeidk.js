// Define the data structure to store locations for each grade
let grade6 = {};
let grade7 = {};
let grade8 = {};
let grade9 = {};
let grade10 = {};
let grade11 = {};

// Function to validate user input
function inputValidation(options, prompt) {
    let choiceExists = false;
    let choice = prompt(prompt);
    while (!choiceExists) {
        if (options.map(option => option.toLowerCase()).includes(choice.toLowerCase())) {
            choiceExists = true;
        } else {
            alert(`You have not entered a valid option. Please choose from: ${options.join('/')}`);
            choice = prompt(prompt);
        }
    }
    return choice;
}

// Add location function
function addLocation() {
    const gradeOptions = ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11"];
    const fridayClassOptions = ["Advisory", "Morning Joe", "Language Lab", "Soul Center", "Clubs", "SEP"];

    const grade = inputValidation(gradeOptions, "Please enter a grade");
    const fridayClass = inputValidation(fridayClassOptions, "Please enter a Friday Class");

    const location = prompt("Please enter the location of that class:");

    switch (grade.toLowerCase()) {
        case "grade 6":
            grade6[fridayClass] = location;
            break;
        case "grade 7":
            grade7[fridayClass] = location;
            break;
        case "grade 8":
            grade8[fridayClass] = location;
            break;
        case "grade 9":
            grade9[fridayClass] = location;
            break;
        case "grade 10":
            grade10[fridayClass] = location;
            break;
        case "grade 11":
            grade11[fridayClass] = location;
            break;
        default:
            alert("Invalid grade entered.");
    }
}

// View location function
function viewLocation() {
    const gradeOptions = ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11"];
    const grade = inputValidation(gradeOptions, "Please enter your current grade");

    let locations = [];

    switch (grade.toLowerCase()) {
        case "grade 6":
            locations = grade6;
            break;
        case "grade 7":
            locations = grade7;
            break;
        case "grade 8":
            locations = grade8;
            break;
        case "grade 9":
            locations = grade9;
            break;
        case "grade 10":
            locations = grade10;
            break;
        case "grade 11":
            locations = grade11;
            break;
        default:
            alert("Invalid grade entered.");
            return;
    }

    let result = "Your locations for Friday classes are:\n";
    for (const fridayClass in locations) {
        result += `${fridayClass}: ${locations[fridayClass]}\n`;
    }

    alert(result);
}

// Main logic to either add or view location
function main() {
    const methodOptions = ["Add", "View"];
    const method = inputValidation(methodOptions, "Would you like to add a location or view your locations for the grade?");

    if (method.toLowerCase() === "add") {
        addLocation();
    } else if (method.toLowerCase() === "view") {
        viewLocation();
    }
}

// To be called when the user interacts with the webpage
function runApp() {
    main();
}
