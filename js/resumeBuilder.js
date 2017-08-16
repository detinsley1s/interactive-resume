// JavaScript objects

let bio = {
  name: 'Daniel Tinsley',
  role: 'Front-end Web Developer',
  contacts: {
    mobile: '636-555-5555',
    email: 'detinsley1s@gmail.com',
    github: 'detinsley1s',
    twitter: '@detinsley1s',
    location: 'Hillsboro, MO'
  },
  welcomeMessage: 'Hello! Welcome to my resume!',
  skills: [
    'CSS',
    'HTML5',
    'JavaScript',
    'JQuery',
    'Python',
    'C++'
  ],
  biopic: 'images/robot.jpg',
  display: function() {
    let formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);
    
    let formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);
    
    let formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    
    let formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    
    let formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $('#topContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedTwitter);
    
    let formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    
    let formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').append(formattedLocation);
    $('#footerContacts').append(formattedLocation);
    
    let formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').append(formattedBiopic);
    
    let formattedWelcomMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedWelcomMsg);
    
    if(bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for(let i = 0; i < bio.skills.length; ++i) {
        let formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkill);
      }
    }
  }
};

let education = {
  schools: [
    {
      name: 'Southeast Missouri State University',
      location: 'Cape Girardeau, MO',
      degree: 'Bachelor of Science',
      majors: ['Cybersecurity'],
      dates: '2013-2016',
      url: 'http://www.semo.edu'
    }
  ],
  onlineCourses: [
    {
      title: 'Responsive Web Design Fundamentals',
      school: 'Udacity',
      dates: '2017',
      url: 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
    },
    {
      title: 'Intro to HTML and CSS',
      school: 'Udacity',
      dates: '2017',
      url: 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
    },
    {
      title: 'JavaScript Basics',
      school: 'Udacity',
      dates: '2017',
      url: 'https://www.udacity.com/course/javascript-basics--ud804'
    },
    {
      title: 'Version Control with Git',
      school: 'Udacity',
      dates: '2017',
      url: 'https://www.udacity.com/course/version-control-with-git--ud123'
    },
    {
      title: 'Intro to Computer Science',
      school: 'Udacity',
      dates: '2016',
      url: 'https://www.udacity.com/course/intro-to-computer-science--cs101'
    }
  ],
  display: function() {
    education.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);

      let formattedName = HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
      let formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
      let formattedSchoolTitle = formattedName + formattedDegree;
      $('.education-entry:last').append(formattedSchoolTitle);

      let formattedDates = HTMLschoolDates.replace('%data%', school.dates);
      $('.education-entry:last').append(formattedDates);
      
      let formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
      $('.education-entry:last').append(formattedLocation);

      school.majors.forEach(function(major) {
        let formattedMajor = HTMLschoolMajor.replace('%data%', major);
        $('.education-entry:last').append(formattedMajor);
      });
    });
    
    $('#education').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      $('#education').append(HTMLschoolStart);
      
      let formattedTitle = HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url);
      let formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
      let formattedOnlineClassTitle = formattedTitle + formattedSchool;
      $('.education-entry:last').append(formattedOnlineClassTitle);
      
      let formattedDates = HTMLonlineDates.replace('%data%', course.dates);
      $('.education-entry:last').append(formattedDates);
      
      let formattedURL = HTMLonlineURL.replace('%data%', course.url).replace('#', course.url);
      $('.education-entry:last').append(formattedURL);
    });
  }
};

let work = {
  jobs: [
    {
      employer: "McDonald's",
      title: 'Maintenance',
      location: 'Hillsboro, MO',
      dates: '2007-2012',
      description: 'Cleaned restaurant and took out trash',
      url: 'https://www.mcdonalds.com/us/en-us.html'
    },
    {
      employer: 'IHOP',
      title: 'Busser',
      location: 'Shrewsbury, MO',
      dates: '2004-2007',
      description: 'Cleaned tables, along with various maintenance tasks',
      url: 'http://www.ihop.com/'
    },
    {
      employer: 'Wal-Mart',
      title: 'Cashier',
      location: 'Festus, MO',
      dates: '2000-2002',
      description: 'Checked out customers',
      url: 'https://www.walmart.com/'
    }
  ],
  display: function() {
    work.jobs.forEach(function(job) {
      $('#workExperience').append(HTMLworkStart);

      let formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer).replace('#', job.url);
      let formattedTitle = HTMLworkTitle.replace('%data%', job.title);
      let formattedEmployerTitle = formattedEmployer + formattedTitle;
      $('.work-entry:last').append(formattedEmployerTitle);

      let formattedDates = HTMLworkDates.replace('%data%', job.dates);
      $('.work-entry:last').append(formattedDates);
      
      let formattedLocation = HTMLworkLocation.replace('%data%', job.location);
      $('.work-entry:last').append(formattedLocation);

      let formattedDescription = HTMLworkDescription.replace('%data%', job.description);
      $('.work-entry:last').append(formattedDescription);
    });
  }
};

let projects = {
  projects: [
    {
      title: 'Build a Portfolio Site',
      dates: '2017',
      description: "An online portfolio showcasing my projects in Udacity's Front-End Web Developer Nanodegree",
      images: ['images/binary-ball.jpg'],
      url: 'https://detinsley1s.github.io/build-a-portfolio-site/'
    },
    {
      title: 'Animal Trading Cards',
      dates: '2017',
      description: 'A simple trading card of a chimpanzee viewable online',
      images: ['images/chimpanzee.jpg'],
      url: 'https://detinsley1s.github.io/animal-trading-cards/'
    }
  ],
  display: function() {
    projects.projects.forEach(function(project) {
      $('#projects').append(HTMLprojectStart);

      let formattedTitle = HTMLprojectTitle.replace('%data%', project.title).replace('#', project.url);
      $('.project-entry:last').append(formattedTitle);

      let formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      $('.project-entry:last').append(formattedDates);

      let formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
      $('.project-entry:last').append(formattedDescription);

      if(project.images.length > 0) {
        project.images.forEach(function(image) {
          let formattedImage = HTMLprojectImage.replace('%data%', image);
          $('.project-entry:last').append(formattedImage);
        });
      }
    });
  }
};


// Display map

function displayMap() {
  $('#mapDiv').append(googleMap);
}


// Run each object's display method to create the webpage

bio.display();
work.display();
projects.display();
education.display();
displayMap();