//1- returnFirstTwoDrivers: should return a new array containing the first two drivers from the passed-in array.
const returnFirstTwoDrivers = (scuberDrivers) => scuberDrivers.slice(0, 2);

//2- returnLastTwoDrivers: should return an array of the last two drivers.
const returnLastTwoDrivers = (scuberDrivers) => scuberDrivers.slice(-2);

//3-  selectingDrivers: has the `returnFirstTwoDrivers` function to as its first element & has the `returnLastTwoDrivers` function to as its last element & allows us to invoke either function from the array.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//4-  createFareMultiplier: returns a function & should multiply a given value using the created multiplier.
const createFareMultiplier = function(rides) {
    return function(rideFare) {
        return rideFare * rides
    }
};

//5- fareDoubler: function that doubles fares. fareDoubler()` — Declare a variable with `const` and assign a function returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in such a way that the new `fareDoubler()` function accepts a fare as its lone argument and doubles it.
function fareDoubler(rideFare) {
    return createFareMultiplier(2)(rideFare);

}

//6-fareTripler: a function that triples fares.
function fareTripler(rideFare) {
    return createFareMultiplier(3)(rideFare);

}
//7- selectDifferentDrivers(arrayOfDrivers, function): returns the first two drivers when passed returnFirstTwoDrivers() as the second argument, & returns the last two drivers when passed returnLastTwoDrivers() as the second argument

const selectDifferentDrivers = function(scuberDrivers, selection) {
    return selection(scuberDrivers);
}