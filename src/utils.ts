import * as jwt from 'jsonwebtoken';
import { Prisma } from './generated/prisma-client';
import { AuthenticationError } from 'apollo-server';

export interface Context {
  prisma: Prisma;
  req: any;
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.req.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string;
    };
    return userId;
  }

  throw new AuthenticationError('Not authorized');
}
