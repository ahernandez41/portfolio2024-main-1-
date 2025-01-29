const roles = ["Computer Science Student","Software Engineer", "Full-Stack Developer", "Leader in Professional Development", "Data Analyst & Researcher"];
let currentIndex = 0;

function updateRoleText() {
    const roleElement = document.getElementById("dynamic-role");
    roleElement.style.opacity = 0; 
    setTimeout(() => {
        roleElement.textContent = roles[currentIndex]; 
        roleElement.style.opacity = 1; 
        currentIndex = (currentIndex + 1) % roles.length; //Loop through roles
    }, 500); //500ms fade out
}

//3second text change
setInterval(updateRoleText, 3000);
