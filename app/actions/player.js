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

export const remove = index => {
  return {
    type: PlayerActionTypes.REMOVE,
    index
  };
};

export const check = name => {
  return {
    type: PlayerActionTypes.CHECK,
    name
  };
};
