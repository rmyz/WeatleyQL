import { Context } from '../../utils';

export const room = {
  async createRoom(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createRoom(data);
  },

  async updateRoom(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateRoom({ where: { id }, data });
  },

  async deleteRoom(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteRoom({ id });
  },
};
