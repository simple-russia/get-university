const UNIVERCITIES_REQUESTED = 'UNIVERCITY_REQUESTED';
type unisRequestedStateType = object[];
const addUniversities = (univercityList: unisRequestedStateType) => ({type: UNIVERCITIES_REQUESTED, payload: univercityList});
type actions = ReturnType<typeof addUniversities>

const initialState: unisRequestedStateType = [];

const getUniReducer = (state = initialState, action: actions) => {
    if (action.type === UNIVERCITIES_REQUESTED) {
        return {...state};
    };
    return state;
};

export { getUniReducer, addUniversities };
