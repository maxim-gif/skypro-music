import { AUTO_NEXT_TRACK, SWITCH_NEXT_TRACK, SWITCH_PREVIOUS_TRACK, SHAKE_TRACK } from "../actions/types/music_app.js";

// 1.
const initialState = {
  tracks: [],
  currentIndex: 0,
};

// 2.
export default function musicAppReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case AUTO_NEXT_TRACK: {

      return {
      };
    }

    case SWITCH_NEXT_TRACK: {
      let nextIndex = state.currentIndex + 1;

      if (nextIndex >= action.payload.length) {
          nextIndex = 0;
      }
      return {
          ...state,
          currentIndex: nextIndex,
      };
  }

    case SWITCH_PREVIOUS_TRACK: {

        return {
        };
  
      }

      case SHAKE_TRACK: {
 
        return {
        };
  
      }

    default:
      return state;
  }
}