async function getData() {
  let response = await fetch('https://reqres.in/api/users/1', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },
  });
  console.log(await response.json());
}

getData();
