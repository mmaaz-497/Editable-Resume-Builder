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
    var resumeHTML = "\n\n    <div>Editable Resume</div>\n\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable='true'>".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable='true'>").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable='true'>").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p><b>Degree:</b><span contenteditable='true'>").concat(degree, "</span></p>\n    <p><b>University:</b><span contenteditable='true'>").concat(university, "</span></p>\n    <p><b>Graduation Years:</b><span contenteditable='true'>").concat(graduationYear, "</span></p>\n\n    <h3>Experience</h3>\n    <p><b>Job Tittle:</b><span contenteditable='true'>").concat(jobTitle, "</span></p>\n    <p><b>Company:</b><span contenteditable='true'>").concat(company, "</span></p>\n    <p><b>Experience Years:</b><span contenteditable='true'>").concat(experienceYear, "</span></p>\n\n    <h3>Skills</h3>\n     <p><b>Skills:</b><span contenteditable='true'>").concat(skills, "</span></p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
