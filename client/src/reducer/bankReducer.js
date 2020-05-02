const bankReducerInitial = []

const banksReducer = (state = bankReducerInitial, action) => {
    switch(action.type){
        case 'GET_BANK': {
            return [...action.payload]
        }
        default: {
            return [...state]    
        }
    }
}

export default banksReducer