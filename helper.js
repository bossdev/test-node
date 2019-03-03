exports.response = (code, message)=>{
    let response = {
        'code':code,
        'message':message
    }
    return response;
}

exports.responseError = (errors)=>{
    let response = {
        'errors':errors
    }
    return response;
}

exports.statusCodeError = (errorName)=>{
    var statusCode;
    switch (errorName) {
        case 'ValidationError':
            statusCode = 422;
            break;
        case 'CastError':
            statusCode = 400;
            break;
        default:
            statusCode = 500;
            break;
    }
    return statusCode;
}

// exports.responseStatus = responseStatus;
// exports.responseError = responseError;
// module.exports = {response,responseError}