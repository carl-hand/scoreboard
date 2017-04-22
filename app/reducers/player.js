/**
 * Created by carl.hand on 18/04/2017.
 */
import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
  {
    name: 'Carl',
    score: 0,
  },
  {
    name: 'Lee',
    score: 0,
  },
];

export default function Player(state = initialState, action) {
  // for each case, the action can access the argument we have specified for the
  // corresponding method in our action creator, e.g. ADD has name and REMOVE has index
  switch (action.type) {
    case PlayerActionTypes.ADD:
      return [
        ...state,
        {
          name: action.name,
          score: 0
        }
      ];
    case PlayerActionTypes.REMOVE:
      return[
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
