const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Ruta para el registro de usuarios
router.post('/register', (req, res) => {
  const { username, password, email } = req.body;

  // Crear un nuevo usuario
  const newUser = new User({
    username,
    password,
    email,
  });

  // Guardar el usuario en la base de datos
  newUser.save()
    .then(() => {
      // El usuario se guardó correctamente
      res.status(200).json({ message: 'Usuario registrado exitosamente' });
    })
    .catch((error) => {
      // Ocurrió un error al guardar el usuario
      res.status(500).json({ error: 'Error al registrar usuario' });
    });
});

// Ruta para el inicio de sesión de usuarios
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Buscar el usuario en la base de datos
  User.findOne({ username, password })
    .then((user) => {
      if (!user) {
        // Usuario no encontrado
        res.status(404).json({ error: 'Usuario no encontrado' });
      } else {
        // Usuario encontrado
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
      }
    })
    .catch((error) => {
      // Ocurrió un error al buscar el usuario
      res.status(500).json({ error: 'Error al iniciar sesión' });
    });
});

module.exports = server.js;
