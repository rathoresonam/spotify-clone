export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQDQc3JKcMxgFiiURVZfnom2Btar_5U4EJ9Sgi0j-H2TgawrQYIWNRZ2iaL0eXZz5CwbLxcSYGNGBEwo_9WsPnGodUvf8oq8UJAxq15cCExfWGvDPNygJXpKZ7DiyeztoWgkkLBdJuLXjLXTuYNXTnknx17MbEwRr86tHAKsq5HsrSkkTawZBbcscYIKUxnL8jNspNb_gMLV8c7eA4mC"
};

const reducer = (state, action) => {
    console.log(action);
switch(action.type){
    case 'SET_USER':
        return{
            ...state, 
            user: action.user
        };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }

            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.playlists
                }
        default:
            return state;
}
}

export default reducer;