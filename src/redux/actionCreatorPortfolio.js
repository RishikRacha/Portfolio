export const isCardExpandedActionCreator = (isCardExpanded) => {
    return {
        type: "expand",
        payload: isCardExpanded
    }
}

export const cardInfoActionCreator = (data) => {
    return {
        type: 'cardInfo',
        payload: data
    }
}