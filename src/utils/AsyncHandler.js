
export const AsyncHandler = (fn) => {
    return (req,res,next) => {
        Promise.resolve(fn(req,res,next)).catch(err => next(err));
    };
};

export default class ErrorHandler extends Error {
    constructor(message = 'Internal Server Error', statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
