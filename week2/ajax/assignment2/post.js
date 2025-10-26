async function postData() {
  let response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },
    body: JSON.stringify({
      name: 'Mikko Mallikas',
      job: 'Software engineer',
    }),
  });
  console.log(await response.json());
}

postData();
