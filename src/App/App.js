import React from 'react';
import IconCarousel from '../IconCarousel/IconCarousel';
import all_icons from './icons';
import {X_OFFSET, Y_OFFSET} from '../constants';
const icons = [...all_icons].map((icon, index) => {
  let newIcon = {...icon};
  newIcon.image = `/img/logos/logo-${1 + (index % 4)}.png`;
  newIcon.s = icon.s || 1;
  newIcon.y = icon.y - Y_OFFSET;
  newIcon.x = icon.x - X_OFFSET;
  newIcon.title = "Company " + index
  return newIcon;
});

const App = () => (
  <IconCarousel icons={icons} />
)
export default App;
