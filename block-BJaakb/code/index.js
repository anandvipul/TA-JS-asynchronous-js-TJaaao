function fetchData(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
    xhr.open(`GET`, url);
    xhr.onload = function () {
        const data = xhr.response;
        const status = {status: 200, statusText: "Fetched Data SuccessFully"};
        const response = new Response(data, status);
        resolve(response);
    };

    xhr.onerror = function () {
        const data = {};
        const status = {status: 400, statusText: "Error Somewhere"};
        const response = new Response(data, status);
        reject(response);
    };

    xhr.send();
    });
}


fetchData("https://api.github.com/users/anandvipul").then((value) => console.log());