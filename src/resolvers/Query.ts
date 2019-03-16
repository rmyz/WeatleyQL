import { Context } from '../utils';

export const Query = {
    accountings(parent, args, context: Context) {
        return context.prisma.accountings();
    },
    accounting(parent, { id }, context: Context) {
        return context.prisma.accounting({ id });
    },
    activities(parent, args, context: Context) {
        return context.prisma.activities();
    },
    activity(parent, { id }, context: Context) {
        return context.prisma.activity({ id });
    },
    bookings(parent, args, context: Context) {
        return context.prisma.bookings();
    },
    booking(parent, { id }, context: Context) {
        return context.prisma.booking({ id });
    },
    customers(parent, args, context: Context) {
        return context.prisma.customers();
    },
    customer(parent, { id }, context: Context) {
        return context.prisma.customer({ id });
    },
    hotels(parent, args, context: Context) {
        return context.prisma.hotels();
    },
    hotel(parent, { id }, context: Context) {
        return context.prisma.hotel({ id });
    },
    orders(parent, args, context: Context) {
        return context.prisma.orders();
    },
    order(parent, { id }, context: Context) {
        return context.prisma.order({ id });
    },
    products(parent, args, context: Context) {
        return context.prisma.products();
    },
    product(parent, { id }, context: Context) {
        return context.prisma.product({ id });
    },
    reports(parent, args, context: Context) {
        return context.prisma.reports();
    },
    report(parent, { id }, context: Context) {
        return context.prisma.report({ id });
    },
    rooms(parent, args, context: Context) {
        return context.prisma.rooms();
    },
    room(parent, { id }, context: Context) {
        return context.prisma.room({ id });
    },
    services(parent, args, context: Context) {
        return context.prisma.services();
    },
    service(parent, { id }, context: Context) {
        return context.prisma.service({ id });
    },
    users(parent, args, context: Context) {
        return context.prisma.users();
    },
    user(parent, { id }, context: Context) {
        return context.prisma.user({ id });
    },
}