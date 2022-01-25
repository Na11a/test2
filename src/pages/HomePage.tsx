import React from 'react';
import { ContactInvitation, HowCreatePost, ScreenCards } from '../components/HomePage';

type Props = {};

const HomePage = (props: Props) => {
  return <div>
      <HowCreatePost />
      <ScreenCards />
      <ContactInvitation />
  </div>;
};
export default HomePage
