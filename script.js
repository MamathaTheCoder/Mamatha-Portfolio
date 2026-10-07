/* =========================================
   PROJECT DATA
   ========================================= */

const projects = [

    {
        title: "Patient Health Readmission Prediction",
        category: "ai",
        icon: "🏥",
        description:
            "A machine learning project focused on predicting patient hospital readmission using healthcare data.",
        technologies: ["Python", "Machine Learning", "Jupyter"]
    },

    {
        title: "Phishing URL Checker",
        category: "cyber",
        icon: "🛡️",
        description:
            "A cybersecurity-focused application designed to identify potentially suspicious and phishing URLs.",
        technologies: ["Python", "Cybersecurity", "URL Analysis"]
    },

    {
        title: "Network Intrusion Detection",
        category: "cyber",
        icon: "🔐",
        description:
            "An AI-based intrusion detection approach for identifying malicious network activity using machine learning and deep learning.",
        technologies: ["Python", "CNN", "LSTM", "Machine Learning"]
    },

    {
        title: "Personal Portfolio",
        category: "web",
        icon: "💻",
        description:
            "A responsive personal portfolio developed using HTML5, CSS3, Bootstrap and JavaScript.",
        technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"]
    }

];
/* =========================================
   DISPLAY PROJECTS
   ========================================= */

const projectContainer = document.getElementById("project-container");

function displayProjects(projectList) {

    projectContainer.innerHTML = "";

    projectList.forEach(project => {

        const projectCard = document.createElement("div");

        projectCard.className = "col-md-6 col-lg-4";

        projectCard.innerHTML = `
            <div class="project-card">

                <div class="project-icon">
                    ${project.icon}
                </div>

                <div class="project-content">

                    <span class="project-category">
                        ${project.category}
                    </span>

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.description}
                    </p>

                    <div class="project-tech">
                        ${project.technologies
                            .map(tech => `<span>${tech}</span>`)
                            .join("")}
                    </div>

                </div>

            </div>
        `;

        projectContainer.appendChild(projectCard);

    });
}


/* Display all projects initially */
displayProjects(projects);
/* =========================================
   PROJECT FILTERING
   ========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class */
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active class to clicked button */
        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        if (filter === "all") {

            displayProjects(projects);

        } else {

            const filteredProjects =
                projects.filter(project =>
                    project.category === filter
                );

            displayProjects(filteredProjects);
        }

    });

});
/* =========================================
   CONTACT FORM VALIDATION
   ========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Error elements
    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const subjectError =
        document.getElementById("subjectError");

    const messageError =
        document.getElementById("messageError");

    const formMessage =
        document.getElementById("formMessage");


    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    formMessage.className = "form-message";
    formMessage.textContent = "";


    let isValid = true;


    // Name validation
    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;

    } else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        isValid = false;
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    // Subject validation
    if (subject === "") {

        subjectError.textContent =
            "Please enter a subject.";

        isValid = false;
    }


    // Message validation
    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }


    // Final result
    if (isValid) {

        formMessage.textContent =
            "✓ Thank you! Your message has been validated successfully.";

        formMessage.classList.add("success");

        contactForm.reset();

    } else {

        formMessage.textContent =
            "Please correct the errors above and try again.";

        formMessage.classList.add("error");

    }

});
/* =========================================
   DARK / LIGHT MODE
   ========================================= */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});
/* =========================================
   TYPING ANIMATION
   ========================================= */

const typingText =
    document.getElementById("typingText");

const roles = [
    "Computer Science & Engineering Student",
    "AI & Machine Learning Enthusiast",
    "Cybersecurity Explorer",
    "Aspiring Software Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 80
    );
}


typeEffect();
/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});
// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});