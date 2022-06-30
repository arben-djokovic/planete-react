export var home = (state = true, action) => {
    if (action.type === 'changeHome') {
        return action.playload
    }
    else {
        return state
    }
}
export var page2 = (state = false, action) => {
    if (action.type === 'changePage2') {
        return action.playload
    }
    else {
        return state
    }
}
export var page3 = (state = false, action) => {
    if (action.type === 'changePage3') {
        return action.playload
    }
    else {
        return state
    }
}
export var page4 = (state = false, action) => {
    if (action.type === 'changePage4') {
        return action.playload
    }
    else {
        return state
    }
}