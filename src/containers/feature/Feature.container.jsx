import React from 'react';
import {Feature} from '../../components';

export default function FeatureContainer({children}) {
  return (
    <Feature>
      <Feature.HeadingsWrap>
      <Feature.Title>journey.</Feature.Title>
      <Feature.Subtitle>wake, explore, and discover.</Feature.Subtitle>
      </Feature.HeadingsWrap>
      {children}
    </Feature>
  );
};
