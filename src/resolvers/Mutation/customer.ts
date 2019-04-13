import { Context } from '../../utils';

export const customer = {
  async createCustomer(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createCustomer(data);
  },

  async updateCustomer(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateCustomer({ where: { id }, data });
  },

  async deleteCustomer(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteCustomer({ id });
  },
};
