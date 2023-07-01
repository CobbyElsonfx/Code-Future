function renderDynamicData() {
  const buttonMenu = document.querySelector('#header-button');
  const buttonImage = document.querySelector('#hamburger-image');

  const navigationMenu = document.querySelector('.nav-items');
  const navigationLinks = document.querySelectorAll('.nav-link');

  function toggleNavigation() {
    navigationMenu.classList.toggle('header-nav-active');
  }

  function changeButtonIcon(path) {
    buttonImage.src = path;
  }
  const navigationIcons = ['./assets/icons/button-menu.png', './assets/icons/close-icon.svg'];
  navigationLinks.forEach((element) => {
    element.addEventListener('click', () => {
      toggleNavigation();
      changeButtonIcon(navigationIcons[0]);
      buttonMenu.style.width = 'initial';
    });
  });

  buttonMenu.addEventListener('click', () => {
    const actualButtonIcon = buttonImage.src;

    if (actualButtonIcon.includes('button-menu')) {
      changeButtonIcon(navigationIcons[1]);
      buttonMenu.style.width = '12px';
    } else {
      changeButtonIcon(navigationIcons[0]);
      buttonMenu.style.width = 'initial';
    }
    toggleNavigation();
  });

  // dynamic rendering of elements
  const featuresArray = [
    {
      name: 'Yachai Benkler',
      intro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description:
        'Benkler studies commons-based peer production, and published his seminal',
      image: 'assets/photos/speaker_01 1 (1).png',

    },
    {
      name: 'Patience Aikins',
      intro: 'President of Young Pirates of Europe',
      description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration',
      image: 'assets/photos/speaker_01 1 (2).png',

    },
    {
      name: 'Kwabena Andoh',
      intro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding ',
      image: 'assets/photos/speaker_01 1 (3).png',
    },
    {
      name: 'Thomas Sarkodie',
      intro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law',
      image: 'assets/photos/speaker_01 1 (4).png',
    },
    {
      name: 'Andoh Francis',
      intro: 'Executive Director of the Wikimedia Foundation',
      description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential',
      image: 'assets/photos/speaker_01 1 (5).png',
    },
    {
      name: 'John Fella',
      intro: 'Executive Director of the Wikimedia Foundation',
      description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
      image: 'assets/photos/speaker_01 1 (5).png',
    },

  ];

  const pioneersRow = document.querySelector('#pioneers-row');
  const eachFeature = featuresArray.map((eachPerson) => `
  <div class="col-xm-12 col-sm-12 col-md-5 card-container">
              <img class="card-img" src= "${eachPerson.image}" alt="pioneer img">
              <div class="about-pioneer">
                <h3 class="name" >${eachPerson.name}</h3>
                <p class="intro">${eachPerson.intro}</p>
                <img id="pionneer-underline-bar" src="./assets/photos/unserlinbrown.svg" alt="bar">
                <p class="description">${eachPerson.description}</p>
              </div>
            </div>
  `);

  pioneersRow.innerHTML = eachFeature;
}

window.onload = renderDynamicData();