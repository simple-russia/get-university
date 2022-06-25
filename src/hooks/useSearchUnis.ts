import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from 'src/utils/redux/rootReducer';
import { getUnisThunk } from 'src/utils/redux/thunks/getUnisThunk';

type statuses = 'initial' | 'loading' | 'error' | 'success';

export const useSearchUnis = () => {
    const [status, setStatus] = useState<statuses>('initial');
    const isFirstRef = useRef(true);
    const isFirst = isFirstRef.current;

    const univercityList = useSelector((state: rootReducerType) => state.requestedUnivercities.univercities);
    const dispatch: any = useDispatch();

    useEffect( () => {
        if (isFirst) {
            isFirstRef.current = false;
        } else {
            setStatus('success');
        }
    }, [univercityList]);

    const doSearch = (searchString: string): void => {
        setStatus('loading');
        dispatch(getUnisThunk(searchString));
    };

    return {univercityList, doSearch, status};
};
