import React from 'react';
import IconCarousel from '../IconCarousel/IconCarousel';
import all_icons from './icons';

const icons = [...all_icons];

const App = () => (
  <IconCarousel icons={icons} />
)
export default App;
