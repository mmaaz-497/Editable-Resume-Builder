var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resumeDisplay');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var graduationYear = document.getElementById('graduationYear').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var experienceYear = document.getElementById('experienceYear').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n\n    <div>Resume</div>\n\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p><b>Degree:</b>").concat(degree, "</p>\n    <p><b>University:</b>").concat(university, "</p>\n    <p><b>Graduation Years:</b>").concat(graduationYear, "</p>\n\n    <h3>Experience</h3>\n    <p><b>Job Tittle:</b>").concat(jobTitle, "</p>\n    <p><b>Company:</b>").concat(company, "</p>\n    <p><b>Experience Years:</b>").concat(experienceYear, "</p>\n\n    <h3>Skills</h3>\n     <p><b>Skills:</b>").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
