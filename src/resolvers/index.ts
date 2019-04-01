import { Query } from './Query';

import { auth } from './Mutation/auth';
import { accounting } from './Mutation/accounting';

import { Accounting } from './Accounting';
import { Customer } from './Customer';

export default {
  Query,
  Node: {
    __resolveType() {
      return null;
    },
  },
  Mutation: {
    ...accounting,
    ...auth,
  },
  Accounting,
  Customer,
};
