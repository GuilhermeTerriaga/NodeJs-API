import { next } from 'sucrase/dist/parser/tokenizer';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader);

  return next();
};
