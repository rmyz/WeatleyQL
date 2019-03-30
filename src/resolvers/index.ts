import { Query } from './Query';
import { auth } from './Mutation/auth';

export default {
  Query,
  Node: {
    __resolveType() {
      return null;
    },
  },
  Mutation: {
    ...auth,
  },
};
