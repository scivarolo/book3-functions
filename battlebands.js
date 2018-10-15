let bandNumber = 1;

const takeNumber = function (bandName) {
    let result = `${bandNumber}. ${bandName}`;
    bandNumber++;
    return result;
}

const scum = takeNumber("Galactic Scum");
console.log(scum); //Should print "1. Galactic Scum"

const under = takeNumber("Underdogs");
console.log(under); //Should print "2. Underdogs"