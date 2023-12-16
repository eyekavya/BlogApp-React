const backendUri = process.env.REACT_APP_API_URL;

export const fetchWrapper = {
  get,
  post,
};

function getCombinedUrl(url) {
  return backendUri + url;
}

function get(url, body) {
  const requestOptions = {
    method: "GET",
    origin: "*",
    headers: {
      "Content-Type": "application/json",
      ...getCombinedUrl(url),
    },
  };
  return fetch(getCombinedUrl(url), requestOptions, body).then(handleResponse);
}

function post(url, body, type) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getCombinedUrl(url),
    },
    origin: "*",
    body: JSON.stringify(body),
  };
  if (type === "formData") {
    requestOptions.body = body;
    delete requestOptions.headers["Content-Type"];
  }
  return fetch(getCombinedUrl(url), requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    return text && JSON?.parse(text);
  });
}
