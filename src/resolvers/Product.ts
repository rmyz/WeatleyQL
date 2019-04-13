import { Context } from '../utils';

export const Product = {
  hotel: ({ id }, args, ctx: Context) => {
    return ctx.prisma.product({ id }).hotel();
  },
  productsOrdered: ({ id }, args, ctx: Context) => {
    return ctx.prisma.product({ id }).productsOrdered();
  },
};
