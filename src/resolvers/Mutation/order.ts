import { Context } from '../../utils';

export const order = {
  async createOrder(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createOrder(data);
  },

  async updateOrder(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateOrder({ where: { id }, data });
  },

  async deleteOrder(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteOrder({ id });
  },
};
