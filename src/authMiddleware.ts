import * as jwt from 'jsonwebtoken';
import { AuthError, Context } from './utils';

const isAuthenticated = async (resolve, parent, args, ctx: Context, info) => {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    jwt.verify(token, process.env.APP_SECRET);
    return resolve();
  }

  throw new AuthError();
};

export const authMiddleware = {
  Accounting: isAuthenticated,
  Customer: isAuthenticated,
};
