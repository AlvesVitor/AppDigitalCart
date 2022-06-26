/**
 * Requisição para api
 * @param type - verbo HTTP
 * @param url - web service
 * @param value - valor contido do body
 */
function request(type, url, value) {
  return new Promise((resolver, reject) => {
    fetch(`${url}`, {
      method: type,
      body: value && JSON.stringify(value),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.ok) {
          resolver(res);
          return res;
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export default { request };
