export default async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log('OK fetching', url, data);

    return data;
  } catch (error) {
    console.log('Error fetching', url, error);
  }
}
