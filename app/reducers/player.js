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
  switch (action.type) {
    case PlayerActionTypes.ADD:
      return [
        ...state,
        {
          name: action.name,
          score: 0
        }
      ];
    default:
      return state;
  }
}
