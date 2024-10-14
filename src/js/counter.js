const dateDiv = document.querySelector(".counter__countdown");
const days = dateDiv.querySelector("#counter-days");
const hours = dateDiv.querySelector("#counter-hours");
const minutes = dateDiv.querySelector("#counter-minutes");
const seconds = dateDiv.querySelector("#counter-seconds");

// Parsing date from data attribute
const dateStr = dateDiv.dataset.expires;
const futDate = parseDate(dateStr);

// days, hours, minutes, seconds to object

export function tick() {
  const tickId = setInterval(() => {
    const objExpires = count2Obj(futDate);

    if (expired(objExpires)) {
      clearInterval(tickId);
      counter2defaults();
      return;
    }

    updateExpires(objExpires);
  }, 1000);
}

function updateExpires(objExpires) {
  if(days.innerHTML !== objExpires.daysLeft.toString()) {
    days.innerHTML = objExpires.daysLeft;
  }
  if(hours.innerHTML !== objExpires.hoursLeft.toString()) {
    hours.innerHTML = objExpires.hoursLeft;
  }
  if(minutes.innerHTML !== objExpires.minutesLeft.toString()) {
    minutes.innerHTML = objExpires.minutesLeft;
  }
  if(seconds.innerHTML !== objExpires.secondsLeft.toString()) {
    seconds.innerHTML = objExpires.secondsLeft;
  }
}

function counter2defaults() {
  days.innerHTML = "00";
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
}

function expired(objExpires) {
  let arrVals = Object.values(objExpires);
  let sum = arrVals.reduce(
    (accumulator, currentVal) => accumulator + currentVal
  );

  if (sum < 0) {
    return true;
  }

  return false;
}

function count2Obj(futDate) {
  let countObj = {
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0,
    secondsLeft: 0,
  };
  let msLeft = futDate.getTime() - Date.now();
  console.log("msLeft: ", msLeft);

  countObj.daysLeft = prependZero(Math.floor(msLeft / (1000 * 60 * 60 * 24)));
  countObj.hoursLeft = prependZero(
    Math.floor((msLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  countObj.minutesLeft = prependZero(
    Math.floor((msLeft % (1000 * 60 * 60)) / (1000 * 60))
  );
  countObj.secondsLeft = prependZero(Math.floor((msLeft % (1000 * 60)) / 1000));

  console.log(
    `${countObj.daysLeft}:${countObj.hoursLeft}:${countObj.minutesLeft}:${countObj.secondsLeft}`
  );

  return countObj;
}

function prependZero(num) {
  const numStr = num.toString();
  if (numStr.length == 1) {
    return "0" + numStr;
  }
  return num;
}

// Parses date string like - 17.10.2024 10:33
function parseDate(dateStr) {
  const dateTime = dateStr.split(" ", 2);
  const [date, time] = dateTime;

  console.log("date: ", date);
  console.log("time: ", time);

  let arrDate = [];
  let arrTime = [];
  const expires = { year: 0, month: 0, day: 0, hour: 0, minutes: 0 };

  if (typeof date === "string") {
    arrDate = date.split(".");
    console.log("arrDate: ", arrDate);
    console.log("arrDate[1]-1: ", Number.parseInt(arrDate[1]) - 1);
  }

  if (typeof time === "string") {
    arrTime = time.split(":");
  }

  console.log("arrDate.length: ", arrDate.length);

  if (arrDate.length > 0 && arrDate.length == 3) {
    expires.day = Number.parseInt(arrDate[0]);
    expires.month = Number.parseInt(arrDate[1]) - 1;
    expires.year = Number.parseInt(arrDate[2]);
    console.log("expires in arrDate: ", expires);
  }

  if (arrTime.length > 0 && arrTime.length == 2) {
    expires.hour = Number.parseInt(arrTime[0]);
    expires.minutes = Number.parseInt(arrTime[1]);
    console.log("expires in arrTime: ", expires);
  }

  const newDate = new Date(
    expires.year,
    expires.month,
    expires.day,
    expires.hour,
    expires.minutes
  );

  return newDate;
}
