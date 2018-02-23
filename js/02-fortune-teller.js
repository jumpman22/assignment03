/*eslint-env browser*/

function tellFortune(numOfChildren, partnerName, location, job) {
    'use strict';
    window.document.write('You will be a ' + job + ' in ' + location + ' married to ' + partnerName + ' with ' + numOfChildren + ' kids.<br>');
}
tellFortune(3, 'Mary', 'Los Angeles', 'plumber');
tellFortune(5, 'Sarah', 'New York', 'pilot');
tellFortune(8, 'Lucy', 'Brazil', 'MMA fighter');