import React, {useState} from 'react';
import styles from './searchpage.module.css';
import Texts from 'lang/en/global.json';

interface SearchPageProps {}

const SearchPage = ({}: SearchPageProps): JSX.Element => {
  const [searchString, setSearchString] = useState<string>('');

  const onSearchStringInput = (event: React.FormEvent<EventTarget>): void => {
    const target = event.target as HTMLInputElement;
    setSearchString(target.value);
  };

  return (
    <div className={styles.main}>
      <p className={styles.home_paragraph}>
        {Texts.home.main_paragraph}
      </p>
      <div className={styles.search_block}>
        <input placeholder='Enter the univercity name' className={styles.search_input} value={searchString} onChange={onSearchStringInput}></input>
        <button className={styles.search_button}>{Texts.home.search_button_text}</button>
      </div>
    </div>
  );
};

export { SearchPage };