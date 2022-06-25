const UNIVERCITIES_REQUESTED = 'UNIVERCITY_REQUESTED';
type univercitiesList = object[];
type unisRequestedStateType = {
    univercities: univercitiesList;
};
const addUniversities = (univercityList: univercitiesList) => ({type: UNIVERCITIES_REQUESTED, payload: univercityList});
type actions = ReturnType<typeof addUniversities>

const initialState: unisRequestedStateType = {
    univercities: [],
};

const getUniReducer = (state = initialState, action: actions) => {
    if (action.type === UNIVERCITIES_REQUESTED) {
        return {...state, action};
    };
    return state;
};

export { getUniReducer, addUniversities };
