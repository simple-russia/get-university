import React, {useEffect, useState} from 'react';
import Texts from 'lang/en/global.json';

interface SearchPageProps {}

const SearchPage = ({}: SearchPageProps): JSX.Element => {
  const [searchString, setSearchString] = useState<string>('');

  const onSearchStringInput = (event: React.FormEvent<EventTarget>): void => {
    const target = event.target as HTMLInputElement;
    setSearchString(target.value);
  };

  useEffect( () => {
    console.log(searchString);
  }, [searchString]);

  return (
    <div>
      <input value={searchString} onChange={onSearchStringInput}></input>
      {Texts.home.main_paragraph}
    </div>
  );
};

export { SearchPage };
