import { Query } from './Query';

import { accounting } from './Mutation/accounting';
import { activity } from './Mutation/activity';
import { auth } from './Mutation/auth';
import { booking } from './Mutation/booking';
import { customer } from './Mutation/customer';
import { hotel } from './Mutation/hotel';
import { order } from './Mutation/order';
import { product } from './Mutation/product';
import { report } from './Mutation/report';
import { room } from './Mutation/room';
import { service } from './Mutation/service';
import { user } from './Mutation/user';

import { Accounting } from './Accounting';
import { Activity } from './Activity';
import { Booking } from './Booking';
import { Customer } from './Customer';
import { Hotel } from './Hotel';
import { Order } from './Order';
import { Product } from './Product';
import { Report } from './Report';
import { Room } from './Room';
import { Service } from './Service';
import { User } from './User';

export default {
  Query,
  Node: {
    __resolveType() {
      return null;
    },
  },
  Mutation: {
    ...accounting,
    ...activity,
    ...auth,
    ...booking,
    ...customer,
    ...hotel,
    ...order,
    ...product,
    ...report,
    ...room,
    ...service,
    ...user,
  },
  Accounting,
  Activity,
  Booking,
  Customer,
  Hotel,
  Order,
  Product,
  Report,
  Room,
  Service,
  User,
};
