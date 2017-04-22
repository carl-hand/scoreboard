/**
 * Created by carl.hand on 18/04/2017.
 */
import * as PlayerActionTypes from '../actiontypes/player';

export const add = name => {
  return {
    type: PlayerActionTypes.ADD,
    name
  };
};

export const remove = (name, index) => {
  return {
    type: PlayerActionTypes.REMOVE,
    name,
    index
  };
};

// the arguments we specify here are the ones we will provide in our callback method,
// in Player.js within incrementScore(), to this.props.onIncrement(index, delta)
export const increment = (index, delta) => {
  return {
    type: PlayerActionTypes.INCREMENT,
    index,
    delta
  };
};

export const check = name => {
  return {
    type: PlayerActionTypes.CHECK,
    name
  };
};
