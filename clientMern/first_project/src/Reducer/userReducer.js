export const intialState = false

export const reducer = (state, action) => {
    if(action.type==="USER"){
        return action.islogin
    }
    return state
}