import React, {useEffect, useState} from 'react';
import styles from './searchpage.module.css';
import Texts from 'lang/en/global.json';
import { useDispatch, useSelector } from 'react-redux';
import { getUnisThunk } from 'src/utils/redux/thunks/getUnisThunk';
import { rootReducerType } from 'src/utils/redux/rootReducer';
import { UniversityItem } from './universityItem';

interface SearchPageProps {}

const SearchPage = ({}: SearchPageProps): JSX.Element => {
  const [searchString, setSearchString] = useState<string>('');
  const dispatch: any = useDispatch();

  const univercityList = useSelector((state: rootReducerType) => state.requestedUnivercities.univercities);

  useEffect( () => {
    console.log('unis are:', univercityList);
  }, [univercityList]);

  const onSearchStringInput = (event: React.FormEvent<EventTarget>): void => {
    const target = event.target as HTMLInputElement;
    setSearchString(target.value);
  };

  const doSearch = () => {
    dispatch(getUnisThunk(searchString));
  };

  return (
    <div className={styles.main}>
      <p className={styles.home_paragraph}>
        {Texts.home.main_paragraph}
      </p>
      <div className={styles.search_block}>
        <input placeholder='Enter the univercity name' className={styles.search_input} value={searchString} onChange={onSearchStringInput}></input>
        <button onClick={doSearch} className={styles.search_button}>{Texts.home.search_button_text}</button>
      </div>
      <div>
        {univercityList.map((university: any, index: number) => {
          console.log(university);
          return <UniversityItem key={index} name={university.name} web_pages={university.web_pages} />;
        })}
      </div>
    </div>
  );
};

export { SearchPage };
