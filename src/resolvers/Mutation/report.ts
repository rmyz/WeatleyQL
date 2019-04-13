import { Context } from '../../utils';

export const report = {
  async createReport(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createReport(data);
  },

  async updateReport(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateReport({ where: { id }, data });
  },

  async deleteReport(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteReport({ id });
  },
};
