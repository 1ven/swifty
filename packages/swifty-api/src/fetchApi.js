export default (
  { url, headers, method, body } = {},
  { mapResponse = identity } = {},
  onSuccess,
  onError
) => {
  fetch(url, {
    body: mapRequest(body),
    headers,
    method
  })
    .then(response =>
      response
        .text()
        .then(body => ({ response, body: mapResponse(body, response) }))
    )
    .then(({ response, body }) => {
      const meta = {
        status: response.status,
        receivedAt: Date.now()
      };

      if (response.status >= 400) {
        return onError(void 0, body, meta);
      }

      onSuccess(body, meta);
    })
    .catch(err => onError(err.message));
};

const identity = x => x;
