const customerModel = require("../models/Customers");
const bcrypt = require("bcrypt");

module.exports = {
  register: (req, res) => {
    res.render("registerForm", {
      title: "Cadastro de clientes",
    });
  },
  add: async (req, res) => {
    const { name, age, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const senhaCrypto = await bcrypt.hash(password, salt);

    const registerUser = new customerModel({
      name,
      age,
      email,
      password: senhaCrypto,
    });
    await registerUser.save();
    res.render("registerForm", {
      title: "Registro de usuário",
      message: "Usuário cadastrado com sucesso",
    });
  },
  listUser: async (req, res) => {
    const users = await customerModel.find();
    res.render("listUsers", {
      title: "Listagem de usuários",
      users,
    });
  },
  editForm: async (req, res) => {
    const { id } = req.query;
    const user = await customerModel.findById(id);
    res.render("editUser", {
      title: "Edição de usuário",
      user,
    });
  },
  editPost: async (req, res) => {
    const { name, age, email } = req.body;
    const { id } = req.params;

    const user = await customerModel.findById(id);
    user.name = name;
    user.age = age;
    user.email = email;
    user.save();

    res.render("editUser", {
      title: "Edição de usuário",
      message: "Usuário alterado com sucesso!",
      user,
    });
  },
  remove: async (req, res) => {
    const { id } = req.params;
    const remove = await customerModel.deleteOne({ _id: id });

    if (remove.deletedCount === 1) {
      res.redirect("/list");
    }
  },
};
