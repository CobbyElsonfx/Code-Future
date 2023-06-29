const featuresArray = [
    {
      name: 'Yachai Benkler',
      intro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description:
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
      image: 'assets/photos/speaker_01 1 (1).png',
     
    },
    {
      name: 'Richmond Owusu',
      intro: 'President of Young Pirates of Europe',
      description:'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
      image: 'assets/photos/speaker_01 1 (2).png',
       
      },
    {
      name: 'Yaw Abochie',
      intro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description:'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
      image: '/assets/photos/speaker_01 1 (3).png',
    },
    {
      name: 'Thomas Sarkodie',
      intro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      description:'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
      image: 'assets/photos/speaker_01 1 (4).png',
    },
    {
      name: 'Andoh Francis',
      intro: 'Executive Director of the Wikimedia Foundation',
      description:'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
      image: 'assets/photos/speaker_01 1 (5).png',
    },
    {
      name: 'John Fella',
      intro: 'Executive Director of the Wikimedia Foundation',
      description:'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
      image: 'assets/photos/speaker_01 1 (5).png',
    },

  ];


  const  pioneersRow = document.querySelector("#pioneers-row")
  const eachFeature = featuresArray.map((eachPerson)=> 
  `
  <div class="col-xm-12 col-sm-12 col-md-5 card-container">
              <img class="card-img" src= "${eachPerson.image}" alt="">
              <div class="about-pioneer">
                <h3>${eachPerson.name}</h3>
                <p class="intro">${eachPerson.intro}</p>
                <p class="description">${eachPerson.description}</p>
              </div>
            </div>
  `)

  console.log(eachFeature)

  pioneersRow.innerHTML = eachFeature


