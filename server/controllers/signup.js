const Users = require('../models/user');
const mongoose = require('mongoose');

const signup = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;
    const isExist = await Users.findOne({ email });

    if (isExist) {
      return res.send("User already exists");
    }

    const newUser = await Users.create({
      email: email,
      password: password
    });

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {

    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (user.password === password) {
      return res.send("Login success");
    } else {
      return res.status(401).send("Invalid password");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { signup, login };
