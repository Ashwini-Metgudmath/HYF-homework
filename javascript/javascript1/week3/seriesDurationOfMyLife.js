// Series duration of my life application
const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]
  var totalPercentage = 0;
  const avgLifeSpan = 80;
  for(var i=0; i<seriesDurations.length; i++){
      const MinsToHours = seriesDurations[i].minutes/60;
      const hrsToDays = (seriesDurations[i].hours)/24;
      const daysToYears = Number((seriesDurations[i].days)/365).toFixed(2);
      timeSpentForEachSeries = Number(daysToYears*100/avgLifeSpan).toFixed(2);
      const seriesTitle = seriesDurations[i].title;
      seriesDurations[i].years = timeSpentForEachSeries;
      console.log(`${seriesTitle} took ${timeSpentForEachSeries} of my life`);
      totalPercentage += seriesDurations[i].years;
  }
  console.log(`In total that is ${totalPercentage} of my life`);
  