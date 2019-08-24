import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { loadState } from './isLoading.reducer';
import { alert } from './alert.reducer';
import { languageSwitch } from './languageSwitch.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  loadState,
  languageSwitch
});

export default rootReducer;