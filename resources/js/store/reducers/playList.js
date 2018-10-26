const initialState = [
    'azazazazazazazaz',
    'zazazazazazazaz2'
]

const playList = (state = initialState, action) => {
    if(action.type === 'ADD_TRACK') {
        return[
            ... state,
            action.payload
        ];
    }

    return state;
}

export default  playList;