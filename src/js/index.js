import '../css/main.css';

let btn = document.querySelector('button');
btn.addEventListener('click', run);

function run() {
    const METHOD_POST = 'POST';
    const DOMAIN = 'http://localhost:3000';

    let method = document.querySelector('.method');
    let action = document.querySelector('.action');
    let message = document.querySelector('.message');

    // console.log("AJAX configuration: ", method.value, action.value, message.value);

    let xhr = new XMLHttpRequest();
    if (method.value && method.value.toUpperCase() === METHOD_POST) {
        xhr.open(method.value.toUpperCase(), DOMAIN + action.value.toLowerCase(), true);
        let msg = {message: message.value};
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(msg));
        // let msg = 'message=' + message.value;
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.send(msg);
    } else {
        let actMsg = action.value.toLowerCase() + '?message=' + message.value;
        xhr.open(method.value.toUpperCase(), DOMAIN + actMsg, true);
        xhr.send();
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            console.log(xhr.responseText);
        }

    };
}