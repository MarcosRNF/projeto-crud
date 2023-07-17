const express = require("express");
const router = express.Router();
const CustomersController = require("../controllers/customers");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Titulo teste",
  });
});

router.get("/register", CustomersController.register);

router.post("/register/add", CustomersController.add);
router.get("/list", CustomersController.listUser);

router.get("/edit", CustomersController.editForm);
router.post("/edit/:id", CustomersController.editPost);

router.get("/remove/:id", CustomersController.remove);

module.exports = router;
