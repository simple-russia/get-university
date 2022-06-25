import React from 'react';

interface UniversityItemProps {
    name: string,
    web_pages: string[]
}

const UniversityItem = (props: UniversityItemProps): JSX.Element => {
  return (
    <div>
      <span>{props.name}</span>
      <a href={props.web_pages[0]}>Site</a>
    </div>
  );
};

export { UniversityItem };
