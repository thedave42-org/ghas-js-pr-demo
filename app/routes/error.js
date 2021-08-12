// Error handling middleware

const errorHandler = (err, req, res,next) => {

    

    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render("error-template", {
        error: err
    });
};

module.exports = { errorHandler };
