import { redirect } from 'next/navigation';
import React from 'react';

const HomePage = () => {
  return redirect("/profile")
};

export default HomePage;