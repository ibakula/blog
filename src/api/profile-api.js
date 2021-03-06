import * as utility from './api-utility';
import * as actions from '../actions/profile-actions';
import store from '../store';

export function getProfileById(profileId) {
  return utility.getDataForContainerType('/api', `users/${profileId}`)
  .then(response => {
    if (!Array.isArray(response.data) && 'id' in response.data) {
      store.dispatch(actions.getProfileSuccess(response.data));
    }
    return response.data;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};