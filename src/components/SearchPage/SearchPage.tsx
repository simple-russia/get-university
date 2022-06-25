import React, {useEffect, useState} from 'react';
import styles from './searchpage.module.css';
import Texts from 'lang/en/global.json';
import { UniversityItem } from './universityItem';
import { useSearchUnis } from 'src/hooks/useSearchUnis';

interface SearchPageProps {}

const SearchPage = ({}: SearchPageProps): JSX.Element => {
  const [searchString, setSearchString] = useState<string>('');
  const {univercityList, doSearch, status} = useSearchUnis();

  useEffect( () => {
    console.log(status);
  }, [status]);

  const onSearchStringInput = (event: React.FormEvent<EventTarget>): void => {
    const target = event.target as HTMLInputElement;
    setSearchString(target.value);
  };

  let message;
  if (status === 'initial') {
    message = 'search for universities';
  } else if (status === 'loading') {
    message = 'loading...';
  } else if (status === 'success') {
    message = `Found ${univercityList.length} results for the name "${searchString}".`;
  } else if (status === 'error') {
    message = 'An error occured.';
  } else {
    message = 'something went wrong';
  }

  return (
    <div className={styles.main}>
      <p className={styles.home_paragraph}>
        {Texts.home.main_paragraph}
      </p>
      <div className={styles.search_block}>
        <input placeholder='Enter the univercity name' className={styles.search_input} value={searchString} onChange={onSearchStringInput}></input>
        <button onClick={() => doSearch(searchString)} className={styles.search_button}>{Texts.home.search_button_text}</button>
      </div>
      <div className={styles.search_results}>
        <p>{message}</p>
        {univercityList.map((university: any, index: number) => {
          console.log(university);
          return <UniversityItem key={index} name={university.name} web_pages={university.web_pages} />;
        })}
      </div>
    </div>
  );
};

export { SearchPage };
