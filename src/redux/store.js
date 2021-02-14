import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alla'},
                {id: 2, name: 'Yulia'},
                {id: 3, name: 'Nick'},
                {id: 4, name: 'Thomas'},
                {id: 5, name: 'Daniel'},
                {id: 6, name: 'Marianne'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber () {
        // subscriber benachrichtigen - notify subscriber;
        // subscriber is rerenderEntireTree
        console.log('State has been changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    dispatch(action) { // action is an object which describes what to do, type: 'ADD-POST'

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }

}

export default store
window.store = store