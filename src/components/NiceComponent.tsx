import React from 'react';

interface NiceComponentProps {}

const NiceComponent = ({}: NiceComponentProps): JSX.Element => {
  return (
    <div>
      This is some nice component
      and lil bit more :)
      another commit
      {'git 2nd branch :>'}
      {'git 2nd branch :> x2'}
    </div>
  );
};

export {NiceComponent};
