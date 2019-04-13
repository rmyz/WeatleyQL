import { Context } from '../../utils';

export const hotel = {
  async createHotel(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createHotel(data);
  },

  async updateHotel(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateHotel({ where: { id }, data });
  },

  async deleteHotel(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteHotel({ id });
  },
};
