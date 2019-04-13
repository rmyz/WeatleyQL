import { Context } from '../../utils';

export const booking = {
  async createBooking(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createBooking(data);
  },

  async updateBooking(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateBooking({ where: { id }, data });
  },

  async deleteBooking(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteBooking({ id });
  },
};
