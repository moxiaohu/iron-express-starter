module.exports = {
  validator: (req, res, next) => {
    console.log('Demo Validator called')
    return next()
  }
}