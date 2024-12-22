document.addEventListener('DOMContentLoaded', () => {
    const setupCarousel = (trackSelector, prevSelector, nextSelector) => {
        const track = document.querySelector(trackSelector);
        const cards = track.querySelectorAll('.carousel-card, .timeline-card');
        const prevButton = document.querySelector(prevSelector);
        const nextButton = document.querySelector(nextSelector);
        let index = 0;

        const updateCarouselPosition = () => {
            const cardWidth = cards[0].offsetWidth;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        };

        prevButton.addEventListener('click', () => {
            if (index > 0) {
                index--;
                updateCarouselPosition();
            }
        });

        nextButton.addEventListener('click', () => {
            if (index < cards.length - 1) {
                index++;
                updateCarouselPosition();
            }
        });

        // Reset carousel position on window resize
        window.addEventListener('resize', updateCarouselPosition);
    };

    // Initialize both carousels
    setupCarousel('.timeline-track', '#experience-prev', '#experience-next');
    setupCarousel('.carousel-track', '#projects-prev', '#projects-next');
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navigation = document.getElementById('navigation');

    // Toggle navigation visibility
    hamburgerBtn.addEventListener('click', () => {
        if (navigation.classList.contains('expanded')) {
            navigation.classList.remove('expanded');
            navigation.classList.add('collapsed');
        } else {
            navigation.classList.remove('collapsed');
            navigation.classList.add('expanded');
        }
    });
  
});

document.addEventListener('DOMContentLoaded', () => {
    // Populate Projects
    const projectsTrack = document.getElementById('projects-track');
    const projects = [
        {
            title: 'Workplace Safety Monitoring',
            description: 'Real-time safety compliance solutions using AI models.',
            image: 'images/project1.jpg'
        },
        {
            title: 'Google Ads Optimization',
            description: 'Boosted ROI by 15% using predictive modeling techniques.',
            image: 'images/project2.jpg'
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('carousel-card');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsTrack.appendChild(projectCard);
    });

    // Populate Blogs
    const blogsTrack = document.getElementById('blogs-track');
    const blogs = [
        {
            title: 'Blog 1',
            description: 'Introduction to Data Science',
            link: 'blog1.html',
            image: 'images/blog1.jpg'
        },
        {
            title: 'Blog 2',
            description: 'ETL Pipelines Simplified',
            link: 'blog2.html',
            image: 'images/blog2.jpg'
        }
    ];

    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <a href="${blog.link}" target="_blank">Read More</a>
        `;
        blogsTrack.appendChild(blogCard);
    });

      // Reset carousel position on window resize
      window.addEventListener('resize', updateBlogsPosition);
});
