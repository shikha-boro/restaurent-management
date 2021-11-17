export const baseUrl = `http://63.142.251.101:3000`
export async function restaurentData() {
  let res = await fetch(baseUrl + '/homepage', {
    method: 'POST'
  });
  const responseBody = await res.json();
  return responseBody.data;
}