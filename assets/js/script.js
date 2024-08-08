const sr = ScrollReveal({
    origin:'bottom',
    distance:'60px',
    duration:3000,
    //reset: true
});


//hero
sr.reveal('.hero-image', {origin:'top'});
sr.reveal('.hero-text', {origin:'left'});

//services
sr.reveal('.services__service', {distance:'100px', interval: 100});

//about
sr.reveal('.about-text', {origin:'left'});
sr.reveal('.about-image', {origin:'right'});

//project
sr.reveal('.project-title');
sr.reveal('.project',{origin:'bottom'});



