export const SEARCH_MOVIE = "SEARCH_MOVIE";


const initialState = {
    text:"",
    movies:[],
    loading : false,
    movie:[]
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIE :

            return {
                ...state,
                text: action.payload,
                loading: false
            };
        default:
            return state
    }

};



//AC

export const SearchBook = (payload)=>({type: SEARCH_MOVIE,payload});




//TC

export const searchBook = () => (dispatch) => {
    debugger
    dispatch(SearchBook())
};


export default searchReducer;