async function request(endpoint, options) {
  const API_URL = 'https://media2.edu.metropolia.fi/restaurant';
  let response = await fetch(`${API_URL}${endpoint}`, options);
  if (!response.ok) throw new Error(response.status);
  return response.json();
}

async function getRestaurants() {
  try {
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let restaurants = await request('/api/v1/restaurants', options);
    return restaurants;
  } catch (error) {
    console.error(error);
  }
}

async function getMenu(id) {
  try {
    let options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let menu = await request(`/api/v1/restaurants/daily/${id}/en`, options);
    return menu;
  } catch (error) {
    console.error(error);
  }
}

function displayRestaurants(restaurants) {
  const table = document.querySelector('table');
  for (let r of restaurants) {
    let tr = document.createElement('tr');

    let name = document.createElement('td');
    name.innerText = r.name;
    tr.appendChild(name);

    let address = document.createElement('td');
    address.innerText = r.address;
    tr.appendChild(address);

    tr.addEventListener('click', () => {
      for (let row of table.children) {
        row.classList.remove('highlight');
      }
      tr.classList.add('highlight');
      displayInfo(r);
    });

    table.appendChild(tr);
  }
}

async function displayInfo(r) {
  let dialog = document.querySelector('dialog');
  dialog.innerHTML = '';

  let name = document.createElement('h3');
  name.innerText = r.name;
  dialog.appendChild(name);

  let address = document.createElement('p');
  address.innerText = `Address: ${r.address}, ${r.postalCode} ${r.city}`;
  dialog.appendChild(address);

  let phoneNumber = document.createElement('p');
  phoneNumber.innerText = 'Phone: ' + r.phone;
  dialog.appendChild(phoneNumber);

  let company = document.createElement('p');
  company.innerText = 'Company: ' + r.company;
  dialog.appendChild(company);

  dialog.appendChild(await displayMenu(r._id));

  let closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => dialog.close());
  dialog.appendChild(closeButton);

  dialog.showModal();
}

async function displayMenu(id) {
  let menu = await getMenu(id);

  console.log(menu.courses);

  let table = document.createElement('table');
  for (let course of menu.courses) {
    let row = document.createElement('tr');

    let name = document.createElement('td');
    name.innerText = course.name;
    row.appendChild(name);

    let diets = document.createElement('td');
    diets.innerText = course.diets;
    row.appendChild(diets);

    table.appendChild(row)
  }
  return table;
}

async function main() {
  let restaurants = await getRestaurants();
  displayRestaurants(restaurants);
}

main();
