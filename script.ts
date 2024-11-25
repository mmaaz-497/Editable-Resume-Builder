
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeDisplay') as HTMLDivElement;

form.addEventListener('submit', (event:Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const degree = (document.getElementById('degree') as HTMLInputElement).value
    const university = (document.getElementById('university') as HTMLInputElement).value
    const graduationYear = (document.getElementById('graduationYear') as HTMLInputElement).value
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value
    const company = (document.getElementById('company') as HTMLInputElement).value
    const experienceYear = (document.getElementById('experienceYear') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    const resumeHTML =`

    <div>Editable Resume</div>

    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable='true'>${name}</span></p>
    <p><b>Email:</b><span contenteditable='true'>${email}</span></p>
    <p><b>Phone:</b><span contenteditable='true'>${phone}</span></p>

    <h3>Education</h3>
    <p><b>Degree:</b><span contenteditable='true'>${degree}</span></p>
    <p><b>University:</b><span contenteditable='true'>${university}</span></p>
    <p><b>Graduation Years:</b><span contenteditable='true'>${graduationYear}</span></p>

    <h3>Experience</h3>
    <p><b>Job Tittle:</b><span contenteditable='true'>${jobTitle}</span></p>
    <p><b>Company:</b><span contenteditable='true'>${company}</span></p>
    <p><b>Experience Years:</b><span contenteditable='true'>${experienceYear}</span></p>

    <h3>Skills</h3>
     <p><b>Skills:</b><span contenteditable='true'>${skills}</span></p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML
    }else{
        console.error('The resume display element is missing')
    }
})