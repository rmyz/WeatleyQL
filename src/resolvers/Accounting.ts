import { Context } from '../utils';

export const Accounting = {
  customer: ({ id }, args, ctx: Context) => {
    return ctx.prisma.accounting({ id }).customer();
  },
};
