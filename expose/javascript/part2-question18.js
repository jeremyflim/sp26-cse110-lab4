function printTime() {
  const d = new Date();
  const time = d.toLocaleTimeString();
  console.log(time);
}

printTime();
setInterval(printTime, 1000);
