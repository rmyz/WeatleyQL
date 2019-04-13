import { Context } from '../utils';

export const Customer = {
  accountings: ({ id }, args, ctx: Context) => {
    return ctx.prisma.customer({ id }).accountings();
  },
  bookings: ({ id }, args, ctx: Context) => {
    return ctx.prisma.customer({ id }).bookings();
  },
  orders: ({ id }, args, ctx: Context) => {
    return ctx.prisma.customer({ id }).orders();
  },
  reports: ({ id }, args, ctx: Context) => {
    return ctx.prisma.customer({ id }).reports();
  },
};
