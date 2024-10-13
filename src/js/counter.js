const futDate = new Date(2024, 9, 16);

const msLeft = futDate.getTime() - Date.now();

console.log("msLeft: ", msLeft);

const setLeftDate = new Date();
setLeftDate.setTime(msLeft);

console.log("msLeft to new Date", setLeftDate);

const daysLeft = Math.floor(msLeft / (1000 * 60 * 60 * 24));
const hoursLeft = Math.floor((msLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutesLeft = Math.floor((msLeft % (1000 * 60 * 60)) / (1000 * 60));
const secondsLeft = Math.floor((msLeft % (1000 * 60)) / 1000);
console.log("daysLeft: ", daysLeft);
console.log("hoursLeft: ", hoursLeft);
console.log(`${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`);



