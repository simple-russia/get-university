import React from 'react';
import Texts from 'lang/en/global.json';

interface SearchPageProps {}

const SearchPage = ({}: SearchPageProps): JSX.Element => {
  return (
    <div>
      {Texts.home.main_paragraph}
    </div>
  );
};

export { SearchPage };
