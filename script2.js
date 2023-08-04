

const buttonAboutMe = document.getElementById("AboutME");
const buttonSkills = document.getElementById("Skills");
const buttonProjects = document.getElementById("Projects");
const section = document.getElementById('text')
const emailIcon = document.getElementById('emailIcon')



function skills(){
    section.innerHTML = "- Web Development: HTML, CSS, JavaScript, Bootstrap, SASS - Other Languages: Python, C- Accessibility";
}

function aboutME(){
    section.innerHTML= "<span class='textInSection'>ABOUT ME<br /> Hello there! I'm Javier, and I'm delighted to welcome you to my corner of the internet. Currently, I'm a second-year student at the University of St. Thomas, studying computer science, and a passionate soccer enthusiast. I'm dedicated to continuous self-improvement and strive to learn something new every day by embracing fresh challenges.<br /><br />  Get In Touch <br /> I'm always excited to connect with collaborators. If you'd like to chat, have a project in mind, or just want to say hello, feel free to find my contact information below. Thank you for visiting!</span>";
}

function projects(){
    section.innerHTML = '<div class="card" style="width: 18rem;"> <img src="./pic.png" class="card-img-top" alt="1"> <div class="card-body"> <h5 class="card-title">Coding Recourses</h5> <p class="card-text">List of respurces useful for web developers or coding in general.</p> <a href="https://github.com/javierp123/resourcesForDevelopers.git" target="_blank" class="btn btn-info">Go</a> </div></div>'}
function buttonIcon(){
    alert('JavierPalma024@gmail.com')
    
}


emailIcon.addEventListener('click',buttonIcon)
buttonAboutMe.addEventListener("click", aboutME);
buttonSkills.addEventListener("click", skills);
buttonProjects.addEventListener("click", projects);


