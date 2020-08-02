import produce from 'immer';

export const INITIAL_STATE: any = [];

export default function techs(state = INITIAL_STATE, { type, payload }: any) {
    return produce(state, (draft: any) => {
        switch (type) {
            case 'ADD_TECH':
                draft.push(payload.tech);
                break;
            default:
        }
    })
}