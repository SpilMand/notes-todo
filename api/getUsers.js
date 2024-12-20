export default async function getUsers() {
  try {
    const headers = {
      Accept: 'application/vnd.api+json',
    };

    const { data } = await useAsyncData(() =>
      $fetch(`/users`, {
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers,
        method: 'GET',
      }),
    );
    console.log(data);
    
    return data.value;
  } catch {
    return [];
  }
}
