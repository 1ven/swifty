export default (
  { url, headers, method, body } = {},
  { request: mapRequest = identity, response: mapResponse = identity } = {}
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

      return {
        body,
        meta
      };
    });
};

const identity = x => x;
