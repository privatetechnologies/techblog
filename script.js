// Blog Data
const blogs = [
    {
        id: 1,
        title: "Getting Started with React 18",
        category: "Frontend",
        excerpt: "Learn the latest features of React 18 and how to build modern web applications...",
        content: "React 18 introduces concurrent rendering, automatic batching, and new hooks...",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "Python for Data Science",
        category: "Data Science",
        excerpt: "Discover why Python is the go-to language for data scientists and learn essential libraries...",
        content: "Python offers powerful libraries like Pandas, NumPy, and Matplotlib...",
        date: "2024-01-10"
    },
    {
        id: 3,
        title: "Cloud Computing Basics",
        category: "Cloud",
        excerpt: "Understanding cloud computing and its different service models (IaaS, PaaS, SaaS)...",
        content: "Cloud computing provides on-demand access to computing resources...",
        date: "2024-01-05"
    },
    {
        id: 4,
        title: "JavaScript ES2024 Features",
        category: "JavaScript",
        excerpt: "Explore the latest JavaScript features that will change how you write code...",
        content: "ES2024 brings new methods for working with arrays, promises, and more...",
        date: "2024-01-01"
    },
    {
        id: 5,
        title: "Git & GitHub Workflow",
        category: "DevOps",
        excerpt: "Master version control with Git and collaborate effectively using GitHub...",
        content: "Learn branching strategies, pull requests, and team collaboration...",
        date: "2023-12-28"
    },
    {
        id: 6,
        title: "Responsive Web Design",
        category: "CSS",
        excerpt: "Create websites that look great on all devices with modern CSS techniques...",
        content: "Use Flexbox, Grid, and media queries to build responsive layouts...",
        date: "2023-12-25"
    }
];

// Load Blogs
function loadBlogs() {
    const blogGrid = document.getElementById('blogGrid');
    
    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <div class="blog-image">
                💻
            </div>
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <small style="color: #999;">${formatDate(blog.date)}</small>
                <br><br>
                <a href="#" class="read-more" onclick="showBlogDetails(${blog.id}); return false;">Read More →</a>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
}

// Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Show Blog Details
function showBlogDetails(blogId) {
    const blog = blogs.find(b => b.id === blogId);
    if (blog) {
        alert(`${blog.title}\n\n${blog.content}\n\nDate: ${formatDate(blog.date)}`);
    }
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Load blogs when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadBlogs();
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});