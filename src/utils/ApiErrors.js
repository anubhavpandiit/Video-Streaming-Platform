class ApiError extends Error {
    constructor(
        statusCode,
        message= "Omething went wrong",
        error= [],
        statck=""

    )
    {
        super(message)
        this.statusCode = statusCode
        thid.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export {ApiError}