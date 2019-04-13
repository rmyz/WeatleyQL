import { Context } from '../../utils';

export const product = {
  async createProduct(parent, { data }, ctx: Context, info) {
    return await ctx.prisma.createProduct(data);
  },

  async updateProduct(parent, { id, data }, ctx: Context, info) {
    return await ctx.prisma.updateProduct({ where: { id }, data });
  },

  async deleteProduct(parent, { id }, ctx: Context, info) {
    return await ctx.prisma.deleteProduct({ id });
  },
};
