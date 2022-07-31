export const fetchWrapper = (url, method='GET', body={}) => {

    let request = {method: method};
    if(method === "POST") {
        request.body = JSON.stringify(body);
        request.headers = {
            'Content-Type': 'application/json',
          };
    }

    return fetch(url, request)
        .then((response) => response.json())
        .catch((error) =>console.log(error))
}
