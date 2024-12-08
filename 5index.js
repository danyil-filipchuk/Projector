'use strict';

// task 1:

function durationBetweenDates(
    startDate = '29 Mar 2001',
    endDate = '30 Mar 2001',
    indicator = 'hours'
) {

    const start = new Date(startDate);
    const end = new Date(endDate);

    const difference = Math.abs(end - start);

    const seconds = 1000;
    const minutes = 1000 * 60;
    const hours = 1000 * 60 * 60;
    const days = 1000 * 60 * 60 * 24;

    if (indicator === 'seconds') {
        return ((difference / seconds).toString() + ' seconds');
    }
    if (indicator === 'minutes') {
        return ((difference / minutes).toString() + ' minutes');
    }
    if (indicator === 'hours') {
        return ((difference / hours).toString() + ' hours');
    }
    if (indicator === 'days') {
        return ((difference / days).toString() + ' days');
    }
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'))  // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'))  // поверне '362 days'
console.log(durationBetweenDates());

// task 2:

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAnGEs: '48.7584',
};

function optimizer(data) {

    for (let key in data) {
        data[key.toLowerCase()] = Number(data[key]).toFixed(2);
        delete data[key];
    }

    return data;

}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}


