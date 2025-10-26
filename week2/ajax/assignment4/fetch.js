async function fetchData(url, options) {
  let response = await fetch(url, {
    method: options.method,
    headers: options.headers,
    body: options.body,
  });
  if (!response.ok) {
    throw new Error(response.status);
  }
  let result = await response.json();
  return result;
}

async function testFetch() {
  try {
    const user = {
      name: 'Mikko Mallikas',
      job: 'Software engineer'
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(user)
    }
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('Error: ', error);
  }
}

testFetch();
