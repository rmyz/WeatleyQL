import { Context } from '../utils';

export const Service = {
  hotel: ({ id }, args, ctx: Context) => {
    return ctx.prisma.service({ id }).hotel();
  },
};
