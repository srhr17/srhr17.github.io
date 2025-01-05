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

// Navigation 
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


// Projects 
document.addEventListener('DOMContentLoaded', () => {
    // Populate Projects
    const projectsTrack = document.getElementById('projects-track');
    const projects = [
        
        {
            title: 'Google Ads Optimization',
            description: 'Utilized CatBoost to enhance ad targeting, increasing impressions by 20%, boosting website traffic by 10%, and improving ROI by 15% through refined keyword strategies.',
            image: 'assets/google-ads-img.png'
        },
        {
            title: 'Workplace Safety Monitoring',
            description: 'Developed a real-time compliance solution using MobileNet and BlazePose, achieving 99% mask detection accuracy and 93% pose detection, reducing violations by 15%.',
            image: 'assets/workplace-safety-img.webp'
        },
        {
            title: 'Custom Database Manager',
            description: 'Engineered a Python-based DBMS with a B+-tree index, reducing query response times by 30% and facilitating efficient data management for large-scale applications.',
            image: 'assets/custom-dbms-img.webp'
        },
        {
            title: 'Customer Churn Prediction',
            description: 'Developed a machine learning model with 92% accuracy to predict customer churn, enabling targeted retention strategies and increasing customer loyalty by 10%.',
            image: 'assets/cust-churn-img.webp'
        },
        {
            title: 'Fraud Detection System',
            description: 'Implemented an anomaly detection system using Scikit-learn to identify fraudulent transactions in real-time, reducing false positives by 20% and preventing potential losses.',
            image: 'assets/fraud-det-img.webp'
        },
        {
            title: 'Sales Forecasting with Time Series Analysis',
            description: 'Designed forecasting models using ARIMA and LSTM to predict monthly sales with 95% accuracy, assisting in inventory management and supply chain optimization.',
            image: 'assets/timeseries-img.webp'
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


// Blogs 
document.addEventListener('DOMContentLoaded', () => {
    // Shared Blog Data
    const blogs = [
        {
            title: 'Importance of Data Representation in Food labels',
            description: 'Comparing Food Labeling Styles between two coutries',
            link: 'blogs/food-labels.html',
            image: 'assets/food-labels.webp',
            tags: ['Personnal Thoughts', 'Beginner', 'Data Representation','Bite Sized Read'],
            date: '2025-01-05'
        },
        {
            title: 'Data Cleaning 101: Tidying Data for Success',
            description: 'Why data cleaning is important?',
            link: 'blogs/data-tidying.html',
            image: 'assets/data-tidying.webp',
            tags: ['Data Science', 'Beginner', 'Data Cleaning','Bite Sized Read'],
            date: '2024-12-23'
        },
        {
                        title: 'Through the Eyes of a Data Scientist: Demystifying Data Science',
                        description: 'Introduction to Data Science',
                        link: 'blogs/intro-to-ds.html',
                        image: 'assets/Through the Eyes of a Data Scientist- Demystifying Data Science.webp',
                        tags: ['Data Science', 'Beginner', 'Guide', 'Bite Sized Read'],
                        date: '2024-12-22'
        },
        {
            title: 'Data Types and Structures: Organizing the Digital World, One Closet at a Time',
            description: 'Different types of data and how it is stored',
            link: 'blogs/data-structures.html',
            image: 'assets/data-struc.webp',
            tags: ['Beginner', 'Data Science', 'Bite Sized Read'],
            date: '2024-12-23'
        }
    ];

    // ** Blog Carousel for Index Page **
    const setupCarousel = (trackSelector, prevSelector, nextSelector) => {
        const track = document.querySelector(trackSelector);
        const cards = track ? track.querySelectorAll('.carousel-card, .blog-card') : [];
        const prevButton = document.querySelector(prevSelector);
        const nextButton = document.querySelector(nextSelector);
        let index = 0;

        const updateCarouselPosition = () => {
            if (cards.length > 0) {
                const cardWidth = cards[0].offsetWidth;
                track.style.transform = `translateX(-${index * cardWidth}px)`;
            }
        };

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (index > 0) {
                    index--;
                    updateCarouselPosition();
                }
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                if (index < cards.length - 1) {
                    index++;
                    updateCarouselPosition();
                }
            });
        }

        window.addEventListener('resize', updateCarouselPosition);
    };

    // Initialize Blog Carousel (Index Page)
    setupCarousel('.blogs-track', '#blogs-prev', '#blogs-next');

    // ** Populate Blogs for Index Page (Carousel) **
    const blogsTrack = document.getElementById('blogs-track');
    if (blogsTrack) {
        blogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.classList.add('blog-card');
            blogCard.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}">
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <div class="blog-tags">
                    ${blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
                <a href="${blog.link}">Read More</a>
            `;
            blogsTrack.appendChild(blogCard);
        });
    }

    // ** All Blogs Page Features **
    const allBlogsContainer = document.getElementById('all-blogs-container');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const filterOptions = document.getElementById('filter-options');

    if (allBlogsContainer) {
        // Populate Tags in Multi-Select Dropdown
        const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)));
        allTags.forEach(tag => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="checkbox" value="${tag}">
                ${tag}
            `;
            filterOptions.appendChild(label);
        });

        // Render Blogs
        const renderBlogs = filteredBlogs => {
            allBlogsContainer.innerHTML = '';
            filteredBlogs.forEach(blog => {
                const blogCard = document.createElement('div');
                blogCard.classList.add('all-blog-card');
                blogCard.innerHTML = `
                    <img src="../${blog.image}" alt="${blog.title}">
                    <div class="blog-info">
                        <h3>${blog.title}</h3>
                        <p>${blog.description}</p>
                        <div class="blog-tags">
                            ${blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                        </div>
                        <p class="blog-date">Published: ${new Date(blog.date).toLocaleDateString()}</p>
                        <a href="../${blog.link}" class="read-more">Read More</a>
                    </div>
                `;
                allBlogsContainer.appendChild(blogCard);
            });
        };

        // Filter Blogs
        const filterBlogs = () => {
            let filteredBlogs = blogs;

            // Filter by search keyword
            const searchKeyword = searchInput?.value.toLowerCase() || '';
            if (searchKeyword) {
                filteredBlogs = filteredBlogs.filter(blog =>
                    blog.title.toLowerCase().includes(searchKeyword) ||
                    blog.description.toLowerCase().includes(searchKeyword)
                );
            }

            // Filter by selected tags
            const selectedTags = Array.from(
                filterOptions.querySelectorAll('input[type="checkbox"]:checked')
            ).map(checkbox => checkbox.value);

            if (selectedTags.length > 0) {
                filteredBlogs = filteredBlogs.filter(blog =>
                    selectedTags.every(tag => blog.tags.includes(tag))
                );
            }

            // Sort by date
            const sortOrder = sortSelect?.value || 'newest';
            filteredBlogs.sort((a, b) =>
                sortOrder === 'newest'
                    ? new Date(b.date) - new Date(a.date)
                    : new Date(a.date) - new Date(b.date)
            );

            renderBlogs(filteredBlogs);
        };

        // Attach Event Listeners
        searchInput?.addEventListener('input', filterBlogs);
        sortSelect?.addEventListener('change', filterBlogs);
        filterOptions?.addEventListener('change', filterBlogs);

        // Initial Render
        renderBlogs(blogs);
    }
});






// Carousal Navigation 
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


// News
document.addEventListener('DOMContentLoaded', () => {
    const newsContent = document.getElementById('news-content');

    // Sample Data Science News
    const newsItems = [
        'Sri Hari Elevates Cloud Analytics with Azure Synapse Integration |',
        'Sri Hari Mentors 200+ Students in Big Data and Scalable Solutions |',
        'Sri Hari Engineers Custom DBMS, Reducing Query Times by 30% |',
        'Sri’s Predictive Maintenance Models Reduce Downtime by 15% |',
        'Sri Mentors Teams in Big Data Tools Like Hadoop, Kafka, and Spark |',
        'Sri Hari Revolutionizes Public Health Data for 3.2M+ Citizens in Chicago |',
        'Sri Automates Data Quality Checks, Reducing Manual Effort by 35% |',
        'Sri’s Sales Forecasting Models Achieve 95% Accuracy, Optimizing Inventory |',
        'Sri Detects Outliers with Python, Elevating Data Accuracy for Public Health |',
        'Sri’s Fraud Detection System Reduces False Positives by 20% |',
        'Sri Builds ML Models with ~97% Accuracy for Outbreak Predictions |',
        'Sri Hari Spearheads Cutting-Edge Data Initiatives at the Chicago Department of Public Health |',
        'Sri Reduces Features by 50% While Boosting Model Accuracy by 15% |',
        'Sri Introduces Real-Time Dashboards at Intellihot, Saving 95% Reporting Time |',
        'Sri’s Collaboration Enhances CHI311 Reporting for Citizen Services |',
        'Sri’s Asynchronous APIs Enhance Data Accessibility by 97% |',
        'Sri Revolutionizes Fraud Detection in Real-Time with Advanced Models |',
        'Sri’s Advanced Geospatial Analysis Drives Health Equity Initiatives |',
        'Sri’s Spark-Based Pipelines Process 50GB of Data Weekly, Setting New Standards |',
        'Sri Improves Emergency Management Responsiveness Through Advanced Dashboards |',
        'Graduate Research Explores Neural Networks and Big Data |',
        'Sri’s Expertise Brings Real-Time Safety Compliance with 99% Accuracy |',
        'Sri’s Marketing Attribution Model Generates 50K Monthly Repeat Purchases |',
        'Sri’s Cutting-Edge Models Boost Caterpillar’s Marketing Efficiency |',
        '150+ Tableau Dashboards Deployed to Enhance Community Health Monitoring |',
        'Sri Optimizes ETL Workflows, Saving 28% Time on Data Ingestion |',
        'Sri’s Google Ads Optimization Increases Impressions by 20% |',
        'System Reliability Soars by 12% Thanks to Sri’s Predictive Models |',
        'Sri Hari Achieves HIPAA Compliance with Active Directory Governance |',
        'From Amrita Vishwa Vidyapeetham to Illinois Tech: Sri’s Transformational Education Journey |',
        'Sri’s Leadership Enhances Public Health Data Governance Across Departments |',
        'ROI Improves by 15% with Sri’s Predictive Ad Targeting Strategies |',
        'Sri Enables Faster Public Health Responses with Geospatial Insights |',
        'Sri’s Data Studio Dashboards Empower Caterpillar’s Decision-Making |',
        'Public Health Reporting Transformed by Sri’s Azure Synapse Integration |',
        'Sri Completes Bachelor’s in Computer Science with an 8.95/10 GPA |',
        'Standardized Records Boost Analysis Speed by 85% Under Sri’s Leadership |',
        'Sri Drives Innovation in Public Health Reporting with Advanced Dashboards |',
        'Sri’s Time Series Models Forecast Monthly Sales with 95% Accuracy |',
        'Sri Mentors Peers During Graduate Studies, Elevating Big Data Expertise |',
        'Sri Hari Transforms Caterpillar’s Sales with 8% Boost via Machine Learning |',
        'Sri Detects Outliers with Python, Elevating Data Accuracy for Public Health |',
        'Sri’s Academic Journey Includes Advanced Studies in Time Series and Statistical Learning |',
        'Sri’s Predictive Models Drive Targeted Retention and Customer Loyalty |',
        'Sri Hari Masters Data Science with a Stellar GPA of 3.7/4.0 |',
        'Cross-Agency Data Sharing Enhanced Under Sri’s Strategic Vision |',
        'Sri’s Workplace Safety Monitoring Achieves 93% Pose Detection Accuracy |',
        'Sri Leverages Spark and Azure to Transform Data Pipelines |'
    ];
    
    

    // Duplicate items to create seamless looping
    const duplicatedItems = newsItems.concat(newsItems);

    // Populate the ticker with the news items
    newsContent.innerHTML = duplicatedItems
        .map(news => `<span class="news-item">${news}</span>`)
        .join('');
});
