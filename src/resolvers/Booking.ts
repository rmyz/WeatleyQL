import { Context } from '../utils';

export const Booking = {
  customer: ({ id }, args, ctx: Context) => {
    return ctx.prisma.booking({ id }).customer();
  },
};
