import { Context } from '../../utils';

export const accounting = {
  async createAccounting(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createAccounting(data);
  },

  async updateAccounting(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateAccounting({ where: { id }, data });
  },

  async deleteAccounting(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteAccounting({ id });
  },
};
