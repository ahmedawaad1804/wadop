// action types

export const GET_BESTSELLER = 'GET_BESTSELLER'

//action creator


export const getBestSeller = () => dispatch => {
    
    dataService.getBestSeller().then(response => {
        // console.log("bets seller");
        // console.log(response.data);
        dispatch({
            type: 'GET_BESTSELLER',
            payload: response.data.result
        })

    }
    ).catch(err => {
        dispatch({
            type: 'GET_BESTSELLER_FAILED',
            
        })

    })




}