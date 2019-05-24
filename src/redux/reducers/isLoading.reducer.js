import { loadingConstants } from '../constants';

export function isLoading(state = {}, action) {
  switch (action.type) {
    case loadingConstants.SUCCESS:
      return {
        type: 'load-success',
        message: action.message
      };
    case loadingConstants.ERROR:
      return {
        type: 'load-danger',
        message: action.message
      };
    case loadingConstants.CLEAR:
      return {};
    default:
      return state
  }
}