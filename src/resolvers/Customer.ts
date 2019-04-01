import { Context } from '../utils';

export const Customer = {
  accountings: ({ id }, args, ctx: Context) => {
    return ctx.prisma.customer({ id }).accountings();
  },
};
