import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,


  teaList: [],
  orders: [
    {
      teaRequestID: 1435345,
      requestDate: "12/04/2019",
      teaID: "COJ-6456",
      amount: 3000,
      notes: "Pack when dry"
    },
    {
      teaRequestID: 14334235,
      requestDate: "12/04/2019",
      teaID: "COJ-7524",
      amount: 7860,
      notes: "Pack in cool dry place"
    }
  ]
});

export default rootReducer;