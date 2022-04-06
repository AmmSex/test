import dialogsReducer from '../state/reducers/dialog-reducer'
import {profileReducer} from '../state/reducers/profile-reduser'

let store = {
    _state : {
        profile: {
            text : [
                {id:1, post: 'Hello, Bro', likeCount: 2},
                {id:2, post: 'How are you?', likeCount: 2},
                {id:3, post: '111111111', likeCount: 3}
              ],
            valueTextarea: 'IT',
            valueOneAnswer: 0,
        },
        dialogs: {
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
    
        },
        nav: {
            friendsProfile : [
                {id: 1, src: 'https://pngicon.ru/file/uploads/les.png', name: 'Марина'},
                {id: 2, src: 'https://pngicon.ru/file/uploads/les.png', name: 'Валера'},
                {id: 3, src: 'https://pngicon.ru/file/uploads/les.png', name: 'Заяц'}
              ]
        }
    },
    getState(){
        return this._state;
    },
    _callSibscribe(){
        console.log('state changed');
    },
    sibscribe(observer){
        this._callSibscribe=observer
    },
    dispatch(action){
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.profile = profileReducer(this._state.profile, action);
        this._callSibscribe(this._state)
    }
}




export default store;