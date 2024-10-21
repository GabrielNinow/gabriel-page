const projectList = [
    {
        "title": "Front-end",
        "project-list": [
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            },
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            },
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            },
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            }
        ]
    },
    {
        "title": "Back-end",
        "project-list": [
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            },
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            },
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            },
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            }
        ]
    },
    {
        "title": "Testing",
        "project-list": [
            {
                "name": "testa",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            },
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            },
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            },
            {
                "name": "test",
                "desc": "description",
                "img": "src/sample.png",
                "url": "kkjoshdafioush.com"
            }
        ]
    }
]

function populateProjects() {
    const projectContainer = document.getElementById('project-container');

    projectList.forEach(list => {
        const container = document.createElement('div');
        container.className = 'container';
    
        const heading = document.createElement('h4');
        heading.textContent = list.title;
        container.appendChild(heading);
    
        const carousel = document.createElement('div');
        carousel.className = 'carousel';
    
        const carouselContainer = document.createElement('ul');
        carouselContainer.className = 'carousel-container';
    
        var itemList = ""

        list["project-list"].forEach(project =>{
                itemList += `
                <li class="carousel-item">
                    <img src="${project.img}" alt="...">
                    <div>
                        <h3>${project.name}</h3>
                        <p>${project.desc}</p>
                    </div>
                </li>`;
            });
            
            carouselContainer.innerHTML = itemList;
        
            carousel.appendChild(carouselContainer);
            
            const prevButton = document.createElement('button');
            prevButton.className = 'prev';
            const prevIcon = document.createElement('img');
            prevIcon.src = 'src/icons/left-arrow.svg';
            prevIcon.alt = '';
            prevButton.appendChild(prevIcon);
            
            const nextButton = document.createElement('button');
            nextButton.className = 'next';
            const nextIcon = document.createElement('img');
            nextIcon.src = 'src/icons/right-arrow.svg';
            nextIcon.alt = '';
            nextButton.appendChild(nextIcon);
            
            carousel.appendChild(prevButton);
            carousel.appendChild(nextButton);
            
            container.appendChild(carousel);
            
            projectContainer.appendChild(container);
        })
    }

populateProjects()



document.querySelectorAll('.carousel').forEach(carousel => {
    const carouselContainer = carousel.querySelector('.carousel-container');
    const items = carousel.querySelectorAll('.carousel-item');
    const nextButton = carousel.querySelector('.next');
    const prevButton = carousel.querySelector('.prev');

    function arrowDisplay() {
        if (currentIndex === 0) {
            prevButton.style.visibility = 'hidden'
        } else {
            prevButton.style.visibility = 'visible'
        }

        if (currentIndex == items.length - itemsToShow) {
            nextButton.style.visibility = 'hidden'
        } else {
            nextButton.style.visibility = 'visible'
        }
    }

    function updateCarousel() {
        const offset = -(currentIndex * (100 / itemsToShow));
        carouselContainer.style.transform = `translateX(${offset}%)`;

        arrowDisplay();
    }

    function calculateItemsToShow() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 700) {
            return 1;
        } else if (windowWidth <= 1000) {
            return 2;
        }
        else {
            return 3;
        }
    }

    let currentIndex = 0;
    let itemsToShow = calculateItemsToShow();

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - itemsToShow) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', () => {
        const newItemsToShow = calculateItemsToShow();
        if (newItemsToShow !== itemsToShow) {
            itemsToShow = newItemsToShow;
            currentIndex = 0;
            updateCarousel();
        }
    });

    arrowDisplay();
});
