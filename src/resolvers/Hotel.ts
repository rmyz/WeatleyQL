import { Context } from '../utils';

export const Hotel = {
  activities: ({ id }, args, ctx: Context) => {
    return ctx.prisma.hotel({ id }).activities();
  },
  products: ({ id }, args, ctx: Context) => {
    return ctx.prisma.hotel({ id }).products();
  },
  rooms: ({ id }, args, ctx: Context) => {
    return ctx.prisma.hotel({ id }).rooms();
  },
  services: ({ id }, args, ctx: Context) => {
    return ctx.prisma.hotel({ id }).services();
  },
  users: ({ id }, args, ctx: Context) => {
    return ctx.prisma.hotel({ id }).users();
  },
};
