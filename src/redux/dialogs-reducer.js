const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {

    // first shallow cpy (oberflaechliche Kopie),
    // then override specific keys: уточняем короче
    let stateCopy

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }

        case SEND_MESSAGE:
            const body = state.newMessageBody
            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 20, message: body}]}
            return stateCopy
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body // action.body, line 64
    }
}

export default dialogsReducer