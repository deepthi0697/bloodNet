import axios from '../config/axios'

export const getBank = (bank) => {
    console.log('get')
    return {
        type: 'GET_BANK',
        payload: bank
    }
}

export const stratGetBanks = () => {
    console.log('start')
    return(dispatch) => {
        axios.get('/bank')
            .then((response) => {
                const bank = response.data
                dispatch(getBank(bank))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
