import { Context } from '../../utils';

export const user = {
  async createUser(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createUser(data);
  },

  async updateUser(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateUser({ where: { id }, data });
  },

  async deleteUser(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteUser({ id });
  },
};
