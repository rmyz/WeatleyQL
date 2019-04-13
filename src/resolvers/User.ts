import { Context } from '../utils';

export const User = {
  hotel: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).hotel();
  },
};
