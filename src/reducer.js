export const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                response: payload.response,
                movies: payload.movies,
                totalResults: payload.totalResults,
                currentPage: payload.currentPage,
            };
        case 'SET_ERROR':
                return {
                    ...state,
                    response: payload.response,
                    error: payload.error,
                };
        case 'CHANGE_LOADING_STATUS':
            return {
                ...state,
                isLoading: payload.loading,
            };
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: payload.text,
            };
        case 'CHANGE_SEARCH_TYPE':
            return {
                ...state,
                searchType: payload.type,
            };
        default:
            return state;
    }
};