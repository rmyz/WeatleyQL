import { Context } from '../utils';

export const Order = {
  customer: ({ id }, args, ctx: Context) => {
    return ctx.prisma.order({ id }).customer();
  },
  productsOrdered: ({ id }, args, ctx: Context) => {
    return ctx.prisma.order({ id }).productsOrdered();
  },
};
