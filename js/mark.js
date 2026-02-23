function getMarks(subjectName) {
    let marks = parseFloat(prompt("Enter marks for " + subjectName + " (0 - 100):"));

    // Check if empty, not number, less than 0, or greater than 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid marks entered for " + subjectName + ". Please enter a number between 0 and 100.");
        return null;
    }

    return marks;
}

let subject1 = getMarks("Mathematics");
let subject2 = getMarks("Botany");
let subject3 = getMarks("Physics");
let subject4 = getMarks("Chemistry");
let subject5 = getMarks("Hindi");

// Stop if any subject is invalid
if (
    subject1 === null ||
    subject2 === null ||
    subject3 === null ||
    subject4 === null ||
    subject5 === null
) {
    alert("Calculation stopped due to invalid input.");
} else {

    let total = subject1 + subject2 + subject3 + subject4 + subject5;
    let average = total / 5;

    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert(
        "Total Marks: " + total +
        "\nAverage Marks: " + average.toFixed(2) +
        "\nGrade: " + grade
    );

    console.log(
        "Total Marks: " + total +
        "\nAverage Marks: " + average.toFixed(2) +
        "\nGrade: " + grade
    );
}