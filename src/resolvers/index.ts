import { Query } from './Query';
import { auth } from './Mutation/auth';
import { accounting } from './Mutation/accounting';
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
};
