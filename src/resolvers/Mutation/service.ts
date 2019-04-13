import { Context } from '../../utils';

export const service = {
  async createService(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createService(data);
  },

  async updateService(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateService({ where: { id }, data });
  },

  async deleteService(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteService({ id });
  },
};
