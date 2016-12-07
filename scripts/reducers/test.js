import merge from 'lodash/merge';

const initialState = {
  playlists: {},
  songs: {},
  users: {},
};

export default function test(state = initialState, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }

  return state;
}
