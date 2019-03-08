import { Context } from '../utils';

export const Query = {
    services(parent, args, context: Context) {
        return context.prisma.services();
    },

    service(parent, { id }, context: Context) {
        return context.prisma.service({ id });
    }
}