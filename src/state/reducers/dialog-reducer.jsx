const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    message : [
        {id:1, message:'Привет, дрыщ'},
        {id:2, message:'Нигга, соу'},
        {id:3, message:'Чмок'},
        {id:4, message:'Мысь'},
        {id:5, message:'Муська'}
      ],
      items : [
        {id: 1, name:'Марина'},
        {id: 1, name:'Дима'},
        {id: 1, name:'Валерий'},
        {id: 1, name:'Анечка'},
        {id: 1, name:'Котик'},
        {id: 1, name:'Киска'}
      ],
      updateNewMessage : ''
}

 const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let messageText = state.updateNewMessage;
            state.updateNewMessage = '';
            state.message.push({
                id: 7,
                message: messageText
            });
            return state;

        case UPDATE_MESSAGE: 
            state.updateNewMessage = action.mes
            return state;

        default: return state;
    }
}

export const updateNewMessage = (text) => {
    return {type: UPDATE_MESSAGE, mes: text}
}

export const addMessage = (text) => {
    return {type: ADD_MESSAGE, mes: text}
}

export default dialogsReducer;