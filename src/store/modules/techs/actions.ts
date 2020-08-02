export function addTech(tech: string) {
    return {
        type: 'ADD_TECH',
        payload: { tech }
    }
}

export function getTechsSuccess(data: any) {
    return {
        type: 'GET_TECHS_SUCCESS',
        payload: { data }
    }
}

export function getTechsFailure() {
    return {
        type: 'GET_TECHS_FAILURE',
    }
}