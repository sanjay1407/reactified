const makeCall = async ({ url, opts }) =>
  fetch(url, opts).then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  });

// Other methods like POST, PUT can be added here in similar manner

const httpService = {
  get: (url, options = {}) =>
    makeCall({ url, opts: { ...options, method: 'GET' } })
};

export default httpService;
