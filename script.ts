
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

    <div>Resume</div>

    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p><b>Degree:</b>${degree}</p>
    <p><b>University:</b>${university}</p>
    <p><b>Graduation Years:</b>${graduationYear}</p>

    <h3>Experience</h3>
    <p><b>Job Tittle:</b>${jobTitle}</p>
    <p><b>Company:</b>${company}</p>
    <p><b>Experience Years:</b>${experienceYear}</p>

    <h3>Skills</h3>
     <p><b>Skills:</b>${skills}</p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML
    }else{
        console.error('The resume display element is missing')
    }
})