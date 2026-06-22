export function getAddedDate(deliverDays){
    const date = new Date();
    
    date.setDate(date.getDate() + deliverDays);
    return date.getDate()
}

export function getAddedDay(deliverDays){
    const date = new Date();
    
    date.setDate(date.getDate() + deliverDays);
    return date.toLocaleString('default', { weekday: 'long' })
}


export function getAddedMonth(deliverDays){
    const date = new Date();
    
    date.setDate(date.getDate() + deliverDays);
    return date.toLocaleString('default', { month: 'long' })
}

export function formatEpoch(epoch) {
     return new Date(epoch).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
    });
}