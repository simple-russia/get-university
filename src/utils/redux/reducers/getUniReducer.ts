const UNIVERCITIES_REQUESTED = 'UNIVERCITY_REQUESTED';
type unisRequestedStateType = object[];
const AddUniversities = (univercityList: unisRequestedStateType) => ({type: UNIVERCITIES_REQUESTED, payload: univercityList});
type actions = ReturnType<typeof AddUniversities>

const initialState: unisRequestedStateType = [];

const getUniReducer = (state = initialState, action: actions) => {
    if (action.type === UNIVERCITIES_REQUESTED) {
        return {...state};
    };
    return state;
};

export { getUniReducer, AddUniversities };
