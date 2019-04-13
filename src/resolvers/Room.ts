import { Context } from '../utils';

export const Room = {
  hotel: ({ id }, args, ctx: Context) => {
    return ctx.prisma.room({ id }).hotel();
  },
};
