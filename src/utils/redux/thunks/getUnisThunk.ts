import { ThunkAction } from 'redux-thunk';
import { rootReducerType } from '../rootReducer';
import { getUniAPI } from 'src/utils/APIs';
import { addUniversities } from '../reducers/getUniReducer';

const getUnisThunk = (univercityName: string):
    ThunkAction<void, rootReducerType, unknown, any> => async (dispatch) => {
        const data = await getUniAPI(univercityName);
        console.log('data is =', data);
        dispatch(addUniversities(data));
};

export { getUnisThunk };
