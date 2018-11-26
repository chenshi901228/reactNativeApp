
const state_init = {
    count: 1
}

export default function login_init(state = state_init, action) {
    switch (action.type) {
        case "GETCOUNT":
            return Object.assign({}, state, {
                count: 2
            })
        default: return state
    }
}




