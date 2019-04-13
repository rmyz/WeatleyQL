import { Context } from '../../utils';

export const activity = {
  async createActivity(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createActivity(data);
  },

  async updateActivity(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateActivity({ where: { id }, data });
  },

  async deleteActivity(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteActivity({ id });
  },
};
