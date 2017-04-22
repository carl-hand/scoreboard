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
