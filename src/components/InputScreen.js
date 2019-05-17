import React from 'react';
import { PageTitle, MainText, Red } from '.';

export default function({ title, children }) {
  return (
    <div className="container">
      <PageTitle>
        <Red>Lastcollage</Red>
      </PageTitle>
      <MainText>{title}</MainText>
      {children}
    </div>
  );
}
