
const middleware = async (req, res, next) => {
    console.log('Demo middleware called')
    return next()
}

module.exports = {
    middleware,
};
