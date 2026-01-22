// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initial call for static elements
function initObserver() {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const technicalSkills = [
    { name: 'Flutter & Dart', icon: 'zap', level: 'Expert', category: 'Engineering' },
    { name: 'Hive', icon: 'database', level: 'Advanced', category: 'Engineering' },
    { name: 'SQLite', icon: 'database', level: 'Advanced', category: 'Engineering' },
    { name: 'Firebase', icon: 'flame', level: 'Advanced', category: 'Engineering' },
    { name: 'HTML, CSS', icon: 'code', level: 'Advanced', category: 'Engineering' },
    { name: 'Java, C', icon: 'terminal', level: 'Advanced', category: 'Engineering' },
    { name: 'UI/UX Design', icon: 'layout', level: 'Advanced', category: 'Engineering' }
];

const designTools = [
    { name: 'Adobe Photoshop', icon: 'image', level: 'Expert', category: 'Design' },
    { name: 'CorelDRAW', icon: 'edit-3', level: 'Advanced', category: 'Design' },
    { name: 'Adobe InDesign', icon: 'book-open', level: 'Expert', category: 'Design' },
    { name: 'Adobe Illustrator', icon: 'palette', level: 'Expert', category: 'Design' },
    { name: 'Adobe Premiere Pro', icon: 'video', level: 'Advanced', category: 'Design' }
];

const designWorks = [
    { title: 'Academic Seminar Poster', image: 'assets/designs/design_1.jpg', category: 'Poster Design' },
    { title: 'Philosophy Symposium Flyer', image: 'assets/designs/design_2.jpg', category: 'Flyer Design' },
    { title: 'Arabic Literature Event', image: 'assets/designs/design_3.jpg', category: 'Graphic Design' },
    { title: 'Commemorative Poster', image: 'assets/designs/design_4.jpg', category: 'Print Design' },
    { title: 'Event Announcement', image: 'assets/designs/design_5.jpg', category: 'Poster Design' }
];

const projects = [
    {
        title: 'Modern Portfolio',
        desc: 'Advanced portfolio website using modern web tech.',
        tech: ['HTML', 'CSS', 'JS'],
        link: '#'
    },
    {
        title: 'E-Commerce App',
        desc: 'Cross-platform mobile shopping experience.',
        tech: ['Flutter', 'Firebase'],
        link: '#'
    }
];

function renderSkills(containerId, skillsList) {
    const container = document.getElementById(containerId);
    if (container) {
        skillsList.forEach(skill => {
            const skillEl = document.createElement('div');
            skillEl.className = 'skill-card reveal';
            skillEl.innerHTML = `
                <i data-lucide="${skill.icon}"></i>
                <h3>${skill.name}</h3>
                <p>${skill.level}</p>
            `;
            container.appendChild(skillEl);
        });
    }
}

function renderGallery() {
    const galleryGrid = document.getElementById('design-gallery-grid');
    if (galleryGrid) {
        designWorks.forEach(work => {
            const workEl = document.createElement('div');
            workEl.className = 'gallery-card reveal';
            workEl.innerHTML = `
                <div class="gallery-image">
                    <img src="${work.image}" alt="${work.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <h3>${work.title}</h3>
                        <span class="category-tag">${work.category}</span>
                    </div>
                </div>
            `;
            galleryGrid.appendChild(workEl);
        });
    }
}

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projects.forEach(project => {
            const projectEl = document.createElement('div');
            projectEl.className = 'project-card reveal';
            projectEl.innerHTML = `
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <div class="tech-stack">
                        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="btn-text">View Details <i data-lucide="arrow-right"></i></a>
                </div>
            `;
            projectsGrid.appendChild(projectEl);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Render all dynamic content
    renderSkills('tech-skills-grid', technicalSkills);
    renderSkills('design-tools-grid', designTools);
    renderGallery();
    renderProjects();

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            // The form submits to the iframe automatically due to target="hidden_iframe"
            // We just need to show the success message

            setTimeout(() => {
                const modal = document.getElementById('success-modal');
                if (modal) {
                    modal.classList.add('active');
                }
                contactForm.reset();
            }, 500); // Small delay to ensure submission starts
        });
    }

    // Modal Close Function (global scope to be accessible by inline onclick)
    window.closeModal = function () {
        const modal = document.getElementById('success-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    };

    // Initialize observer for ALL revealed elements (static + dynamic)
    initObserver();

    // Initialize Lucide Icons
    lucide.createIcons();
});
