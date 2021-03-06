import * as actionTypes from '../actions/action-types';

const initialState =  {
  articles: []
};

function reducer(state = initialState, action) {
  
  switch (action.type) {
    case actionTypes.UPDATE_RECOMMENDED_SECTION_SUCCESS:
      return { articles: [...action.articles] };
    case actionTypes.UPDATE_RECOMMENDED_SECTION_FAIL:
      return initialState;
  }

  return state;
}

export default reducer;