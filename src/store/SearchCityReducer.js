const defaultState = { city: ''}

const SEARCH_WEATHER = "SEARCH_WEATHER";
const SEARCH_ERROR = "SEARCH_ERROR";

const SearchCityReducer =  (state = defaultState, action) => {
    switch (action.type){
        case SEARCH_WEATHER:
            return {...state, weather: {...action.payload}}
        case SEARCH_ERROR:
            return{ ...state, error: action.payload}
        default:
            return state;
    }
}

export const searchWeatherAction = (payload) => ({type: SEARCH_WEATHER, payload})
export const searchWeatherErrorAction = (payload) => ({type: SEARCH_ERROR, payload})

export default  SearchCityReducer