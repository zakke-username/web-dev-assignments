let target = document.querySelector('#target');

let browser = document.createElement('p');
browser.innerText = 'Browser: ' + navigator.userAgent;
target.appendChild(browser);

let os = document.createElement('p');
os.innerText = 'OS: ' + navigator.platform;
target.appendChild(os);

let screenInfo = document.createElement('p');
screenInfo.innerText = 'Screen width: ' + screen.width + ', height: ' + screen.height;
target.appendChild(screenInfo);

let availScreen = document.createElement('p');
availScreen.innerText = 'Available screen width: ' + screen.availWidth + ', height: ' + screen.availHeight;
target.appendChild(availScreen);

let dateTimeFi = new Date().toLocaleString('fi-FI', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});
let dateTimeInfo = document.createElement('p');
dateTimeInfo.innerText = 'Date and time: ' + dateTimeFi;
target.appendChild(dateTimeInfo);
