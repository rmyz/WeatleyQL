import * as jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import { Context } from './utils';

const isAuthenticated = async (resolve, parent, args, ctx: Context, info) => {
  const Authorization = ctx.req.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    jwt.verify(token, process.env.APP_SECRET);
    return resolve();
  }

  throw new AuthenticationError('Not authorized');
};

export const authMiddleware = {
  Accounting: isAuthenticated,
  Activity: isAuthenticated,
  Booking: isAuthenticated,
  Order: isAuthenticated,
  Product: isAuthenticated,
  Report: isAuthenticated,
  Room: isAuthenticated,
  Service: isAuthenticated,
  Query: {
    hotel: isAuthenticated,
    hotels: isAuthenticated,
    user: isAuthenticated,
    users: isAuthenticated,
    customer: isAuthenticated,
    customers: isAuthenticated,
  },
  Mutation: {
    createHotel: isAuthenticated,
    updateHotel: isAuthenticated,
    deleteHotel: isAuthenticated,
    updateUser: isAuthenticated,
    deleteUser: isAuthenticated,
    createCustomer: isAuthenticated,
    updateCustomer: isAuthenticated,
    deleteCustomer: isAuthenticated,
  },
};
