const CHANGE_TEXTAREA = 'CHANGE_TEXTAREA'
const ADD_POST = 'ADD_POST'

let initialState = {
    text : [
        {id:1, post: 'Hello, Bro', likeCount: 2},
        {id:2, post: 'How are you?', likeCount: 2},
        {id:3, post: '111111111', likeCount: 3}
      ],
    valueTextarea: 'IT'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 10,
                post: state.valueTextarea,
                likeCount: 0
            };
            state.text.push(newPost);
            state.valueTextarea= ''
            return state;

        case CHANGE_TEXTAREA: 
            state.valueTextarea= action.text
            return state;

        default: return state;
    }
}

export const changeTextareaDispatch = (text) => {
    return {type: CHANGE_TEXTAREA, text:text}
}

export const addPostDispatch = () => {
    return {type: ADD_POST};
}
