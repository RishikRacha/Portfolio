const initialState = {
    isCardExpanded: false,
    cardInfo: {
        name:'', description:'', image:'', url:'', expandedInfo:'',
    }
}

export default (state = initialState, { type, payload }) => {
  
    if(type == 'expand') {
        state = {...state, isCardExpanded : payload};
    }

    if(type === 'cardInfo') {
        state = {...state, cardInfo : payload};
    }

    return state; // Ensure the updated state is returned
}
