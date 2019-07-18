import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/header';

storiesOf('Header', module)
  .add('navigation', () => (
    <Header />
  )) 
