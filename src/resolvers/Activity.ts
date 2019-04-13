import { Context } from '../utils';

export const Activity = {
  hotel: ({ id }, args, ctx: Context) => {
    return ctx.prisma.activity({ id }).hotel();
  },
};
