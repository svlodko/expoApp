import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const CHANGE_TEXT = 'CHANGE_TEXT'


const initialState = {
    count: 0,
    text: 'Test'
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: action.payload,
            };
        case DECREMENT:
            return {
                ...state,
                count: action.payload,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.payload
            };
        default: return state
    }
}


export const setIncrementCount = (count) =>({
    type: INCREMENT,
    payload: count
})

export const setDecrementCount = (count) =>({
    type: DECREMENT,
    payload: count
})
export const setInputText = (text) =>({
    type: CHANGE_TEXT,
    payload: text
})



export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))




