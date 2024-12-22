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

});

document.addEventListener('DOMContentLoaded', () => {
    const blogsTrack = document.getElementById('blogs-track');
    const blogs = [
        {
            title: 'Blog 1',
            description: 'Introduction to Data Science',
            link: 'blog1.html',
            image: 'images/blog1.jpg',
            tags: ['Data Science', 'Beginner', 'Guide'],
            date: '2024-01-10'
        },
        {
            title: 'Blog 2',
            description: 'ETL Pipelines Simplified',
            link: 'blog2.html',
            image: 'images/blog2.jpg',
            tags: ['ETL', 'Data Engineering', 'Tutorial'],
            date: '2024-01-08'
        }
    ];

    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <p class="blog-date">Published: ${new Date(blog.date).toLocaleDateString()}</p>
            <div class="blog-tags">
                ${blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
            <a href="${blog.link}" target="_blank">Read More</a>
        `;
        blogsTrack.appendChild(blogCard);
    });
         // Reset carousel position on window resize
         window.addEventListener('resize', updateBlogsPosition);
});


document.addEventListener('DOMContentLoaded', () => {
    AOS.init(); // Initialize AOS animations

    // Existing scripts for carousels and navigation
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

        window.addEventListener('resize', updateCarouselPosition);
    };

    setupCarousel('.timeline-track', '#experience-prev', '#experience-next');
    setupCarousel('.carousel-track', '#projects-prev', '#projects-next');
});

document.addEventListener('DOMContentLoaded', () => {
    const newsContent = document.getElementById('news-content');

    // Sample Data Science News
    const newsItems = [
        'OpenAI introduces ChatGPT updates for business insights |',
        'Data Science salaries rise by 20% globally in 2024 |',
        'New Python libraries simplify ML model deployment |',
        'Big Data tools see a 30% increase in adoption this year |'
    ];

    // Duplicate items to create seamless looping
    const duplicatedItems = newsItems.concat(newsItems);

    // Populate the ticker with the news items
    newsContent.innerHTML = duplicatedItems
        .map(news => `<span class="news-item">${news}</span>`)
        .join('');
});
