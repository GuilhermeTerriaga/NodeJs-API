import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Guilherme Terriaga',
    email: 'guilherme.terriaga@gmail.com',
    password_hash: 'password',
  });
  res.json(user);
});

module.exports = routes;
