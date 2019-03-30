import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../utils';

export const auth = {
  async signup(parent, { data }, ctx: Context) {
    const password = await bcrypt.hash(data.password, 10);
    const user = await ctx.prisma.createUser({ ...data, password });

    return {
      token: jwt.sign({ user }, process.env.APP_SECRET),
      user,
    };
  },

  async login(parent, { email, password }, ctx: Context) {
    const user = await ctx.prisma.user({ email });
    if (!user) throw new Error(`No such user found for email: ${email}`);

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new Error('Invalid password');

    return {
      token: jwt.sign({ user }, process.env.APP_SECRET),
      user,
    };
  },

  async createGuestToken(parent, { id }, ctx: Context) {
    const customer = await ctx.prisma.customer({ id });
    if (!customer) throw new Error(`No such user found for id: ${id}`);

    return {
      token: jwt.sign({ customer }, process.env.APP_SECRET),
      customer,
    };
  },
};
