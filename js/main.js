



// time calculating 

function diff() {
    const a = moment('2016-08-16 00:00:01');
    const b = moment();
    diff = moment.preciseDiff(a, b, true);

    diffYears = diff['years']
    diffMonths = diff['months']
    diffDays = diff['days']
    diffHours = diff['hours']
    diffMinutes = diff['minutes']
    diffSeconds = diff['seconds']

    document.getElementById('output').innerHTML = `${diffYears}y ${diffMonths}m ${diffDays}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`;
}
setInterval(diff, 1000)


// text typing

let string = "I've been in love with you for:";
let array = string.split("");
let timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("text").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 100);

}
frameLooper();



