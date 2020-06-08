const { controller } = app.locals;
// TODO check why this not work
// const service = app.locals.getService('Service', 'module1')
class Controller {
  static async V1(req, res) {
    app.locals.getService('Service', 'module1').demoServiceFun()
    return controller.sendSuccess(res, "ok")
  }
}

module.exports = Controller;
