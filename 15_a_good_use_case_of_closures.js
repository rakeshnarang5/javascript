var sendRequestCallBackFunction = function(response) {
    alert('Request ' + requestId + ' returned')
}

function sendRequest() {
    var requestId = '123'
    $.ajax({
        url: '/myUrl',
        success: sendRequestCallBackFunction
    })
}
// callback function sendRequestCallBackFunction will have access to 
// requestId when the response has status_code: success