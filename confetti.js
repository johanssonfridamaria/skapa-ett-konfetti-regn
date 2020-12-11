const chooseParticleColor = (groupName) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor 
}

const bang = (addConfettiParticles) => {
  setTimeout(function() { addConfettiParticles({
    groupName: 'puff',  // Valfritt namn på gruppen
    particleAmount: 150,  // Antal konfettipartiklar
    xPosition: 50,      // Position i procent av skärmens bredd, 0 är längst till vänster och 100 längst till höger
    yPosition: 50,      // Position i procent av skärmens höjd, 0 är längst ner och 100 högst upp
    xVelocity: 1,       // Hastighet i sidled, positiva värden åker åt höger och negativa åt vänster
    yVelocity: 2,       // Hastighet i höjdled, positiva värden åker uppåt och negativa värden nedåt
    xSpread: 50,        // Slumpmässig spridning på partikelns hastighet i sidled
    ySpread: 50         // Slumpmässig spridning på partikelns hastighet i höjdled
  }) }, 500);
  setTimeout(function() { addConfettiParticles({
    groupName: 'puff',  // Valfritt namn på gruppen
    particleAmount: 150,  // Antal konfettipartiklar
    xPosition: 50,      // Position i procent av skärmens bredd, 0 är längst till vänster och 100 längst till höger
    yPosition: 50,      // Position i procent av skärmens höjd, 0 är längst ner och 100 högst upp
    xVelocity: -1,       // Hastighet i sidled, positiva värden åker åt höger och negativa åt vänster
    yVelocity: 2,       // Hastighet i höjdled, positiva värden åker uppåt och negativa värden nedåt
    xSpread: 50,        // Slumpmässig spridning på partikelns hastighet i sidled
    ySpread: 50         // Slumpmässig spridning på partikelns hastighet i höjdled
  }) }, 1500);
  setTimeout(function() { addConfettiParticles({
    groupName: 'puff',  // Valfritt namn på gruppen
    particleAmount: 150,  // Antal konfettipartiklar
    xPosition: 50,      // Position i procent av skärmens bredd, 0 är längst till vänster och 100 längst till höger
    yPosition: 50,      // Position i procent av skärmens höjd, 0 är längst ner och 100 högst upp
    xVelocity: 0,       // Hastighet i sidled, positiva värden åker åt höger och negativa åt vänster
    yVelocity: 2,       // Hastighet i höjdled, positiva värden åker uppåt och negativa värden nedåt
    xSpread: 80,        // Slumpmässig spridning på partikelns hastighet i sidled
    ySpread: 50         // Slumpmässig spridning på partikelns hastighet i höjdled
  }) }, 1000);
}



export {
  chooseParticleColor,
  bang
}