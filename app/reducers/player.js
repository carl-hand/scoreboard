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

// the order you specify your switch cases in must match the order of your action creators
export default function Player(state = initialState, action) {
  // for each case, the action can access the argument we have specified for the
  // corresponding method in our action creator, e.g. ADD has name and REMOVE has index
  var actionType = action.type;
  if (actionType === PlayerActionTypes.ADD) {
    return [
      ...state,
      {
        name: action.name,
        score: 0
      }
    ];
  }
  else if (actionType === PlayerActionTypes.REMOVE) {
    var shouldAddPlayer = false;
    const Players = [...state];
    Players.map((player, index) => {
      if (action.name === player.name) {
        action.index = index;
        shouldAddPlayer = true;
      }
      else {
        console.log(action.name + " does not exist");
      }
    });
    if (shouldAddPlayer) {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    }
    else {
      return [
        ...state
      ];
    }
  }
  else if (actionType = PlayerActionTypes.INCREMENT) {
    const Players = [...state];
    var index = action.index;
    if (index != undefined) {
      console.log("index hit is: " + index);
      Players[index].score += action.delta;
    }
    return [
      ...state
    ];
  }
  else if (actionType === PlayerActionTypes.CHECK) {
    console.log(...state);
    return state;
  }
  else {
    return state;
  }
}
