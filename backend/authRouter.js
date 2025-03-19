const Router = require("express")
const {check} = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");
const controller = require("./authController")
const router = new Router();

router.post("/registration", [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', 'Пароль не должен быть больше 4 и меньше 10 символов').isLength({min: 4, max: 10})
])
router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(['ADMIN']), controller.getUsers)

module.exports = router;