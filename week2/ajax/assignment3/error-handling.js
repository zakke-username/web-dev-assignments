async function getData() {
  try {
    let response = await fetch('https://reqres.in/api/unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
}

getData();
