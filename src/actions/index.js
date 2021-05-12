export const ADD_RECEIPE= 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR= 'REMOVE_FROM_CALENDAR'

export function addRecipe({day, recipe, meal}){
    return {
        type:ADD_RECEIPE,
        recipe,
        day, 
        meal,
    }
}

export function removeFromCalendar({day,meal}){
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal,
    }
}

