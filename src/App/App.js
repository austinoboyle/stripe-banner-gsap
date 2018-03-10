import React from 'react';
import IconCarousel from '../IconCarousel/IconCarousel';
import all_icons from './icons';

const icons = [...all_icons].map((icon, index) => {
  let newIcon = {...icon};
  newIcon.image = `/img/logos/logo-${1 + (index % 4)}.png`;
  newIcon.s = icon.s || 1;
  newIcon.y = icon.y - 80;
  newIcon.title = "Company " + index
  return newIcon;
});

const App = () => (
  <IconCarousel icons={icons} />
)
export default App;
