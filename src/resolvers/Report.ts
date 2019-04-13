import { Context } from '../utils';

export const Report = {
  customer: ({ id }, args, ctx: Context) => {
    return ctx.prisma.report({ id }).customer();
  },
};
