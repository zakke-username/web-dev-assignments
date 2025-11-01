// Fetch
async function request(endpoint, options) {
  const API_URL = 'https://media2.edu.metropolia.fi/restaurant';
  let response = await fetch(`${API_URL}${endpoint}`, options);
  if (!response.ok) throw new Error(response.status);
  return response.json();
}

// Restaurants API call
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
    return [];
  }
}

// Menu API call
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
    return [];
  }
}

// Display list of restaurants
function displayRestaurants(restaurants) {
  if (!restaurants || restaurants.length === 0) {
    let errorMessage = document.createElement('p');
    errorMessage.innerText = 'Error: could not find restaurants.';
    document.querySelector('main').appendChild(errorMessage);
    return;
  }

  const table = document.querySelector('table');
  table.innerHTML = '';

  // Headers
  let headers = document.createElement('tr');

  let nameHeader = document.createElement('th');
  nameHeader.innerText = 'Name';
  headers.appendChild(nameHeader);

  let addressHeader = document.createElement('th');
  addressHeader.innerText = 'Address';
  headers.appendChild(addressHeader);

  table.appendChild(headers);

  // Restaurant name & address
  for (let r of restaurants) {
    let tr = document.createElement('tr');

    let name = document.createElement('td');
    name.innerText = r.name;
    tr.appendChild(name);

    let address = document.createElement('td');
    address.innerText = r.address;
    tr.appendChild(address);

    tr.addEventListener('click', () => {
      for (let row of table.querySelectorAll('tr')) {
        row.classList.remove('highlight');
      }
      tr.classList.add('highlight');
      displayDialog(r);
    });

    table.appendChild(tr);
  }
}

// Display restaurant modal (info & menu)
async function displayDialog(r) {
  let dialog = document.querySelector('dialog');
  dialog.innerHTML = '';

  dialog.appendChild(createInfoBox(r));
  dialog.appendChild(await createMenuTable(r._id));

  let closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => dialog.close());
  dialog.appendChild(closeButton);

  dialog.showModal();
}

// General restaurant info div
function createInfoBox(r) {
  let infoBox = document.createElement('div');

  let name = document.createElement('h3');
  name.innerText = r.name;
  infoBox.appendChild(name);

  let address = document.createElement('p');
  address.innerText = `Address: ${r.address}, ${r.postalCode} ${r.city}`;
  infoBox.appendChild(address);

  let phoneNumber = document.createElement('p');
  phoneNumber.innerText = 'Phone: ' + r.phone;
  infoBox.appendChild(phoneNumber);

  let company = document.createElement('p');
  company.innerText = 'Company: ' + r.company;
  infoBox.appendChild(company);

  return infoBox;
}

// Menu table
async function createMenuTable(id) {
  let menu = await getMenu(id);

  if (!menu.courses || menu.courses.length === 0) {
    let errorMessage = document.createElement('p');
    errorMessage.innerText = 'Could not find menu.';
    return errorMessage;
  };

  let table = document.createElement('table');

  // Headers
  let headers = document.createElement('tr');

  let nameHeader = document.createElement('th');
  nameHeader.innerText = 'Course';
  headers.appendChild(nameHeader);

  let dietHeader = document.createElement('th');
  dietHeader.innerText = 'Diets';
  headers.appendChild(dietHeader);

  let priceHeader = document.createElement('th');
  priceHeader.innerText = 'Price';
  headers.appendChild(priceHeader);

  table.appendChild(headers);

  // Courses (name, allergens, price)
  for (let course of menu.courses) {
    let row = document.createElement('tr');

    let name = document.createElement('td');
    name.innerText = course.name;
    row.appendChild(name);

    let diets = document.createElement('td');
    diets.innerText = course.diets ? course.diets : '';
    row.appendChild(diets);

    let price = document.createElement('td');
    price.innerText = course.price ? course.price : '';
    row.appendChild(price);

    table.appendChild(row)
  }
  return table;
}

async function main() {
  // Get & sort restaurants
  let restaurants = await getRestaurants();
  restaurants.sort((a, b) => a.name.localeCompare(b.name));
  displayRestaurants(restaurants);
}

main();
