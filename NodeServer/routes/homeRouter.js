const { Router } = require("express");
const home = Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Contenedor = require("../controller/products.controller") 

home.get("/", auth, async (req, res) => {
  const datosUsuario = await User.findById(req.user._id); //busco el usuario en la base de datos
  const productos = await Contenedor.getAll()
  const user = datosUsuario.username;  //guardo el nombre de usuario en una variable
  res.render("home", { //renderizo la vista home, y le paso el nombre de usuario
    user: user,
    productos: productos,

  });
});

module.exports = home;