
const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
    };
export const gamesReducer = (state = initState, action) => {
    switch(action.type) {
        case "FETCH_GAMES":
            return {...state};
        default:
            return {...state};
    }
}

// Action Creater
const fetchGames = (userData) => {
    return {
        type: "FETCH_GAMES",
        
    };
};









