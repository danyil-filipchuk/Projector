'use string';

function durationBetweenDates(a,b,c) {

    const a2 = new Date(a);
    const b2 = new Date(b);

    if (c === 'seconds') console.log((Math.abs((a2 - b2) / 1000)).toString());
    if (c === 'minutes') console.log((Math.abs(a2 - b2) / (1000*60)).toString());
    if (c === 'hours') console.log((Math.abs(a2 - b2) / (1000*60*60)).toString());
    if (c === 'days') console.log((Math.abs(a2 - b2) / (1000*60*60*24)).toString());
}

durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')  // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')  // поверне '362 days'
