import React, { Component } from 'react';
import IconCarousel from '../IconCarousel/IconCarousel';
import Button from '../Button/Button';
import all_icons from './icons';
import styles from './App.scss';

const icons = [...all_icons].map((icon, index) => {
  let newIcon = {...icon};
  if (icon.s === undefined) {
    newIcon.s = 1;
  }
  newIcon.image = `/img/test/logo-${1 + (index % 4)}.png`;
  newIcon.y = icon.y - 80;
  newIcon.title = "Company " + index;
  return newIcon;
});

const App = () => {
    return (
      <div>
        <IconCarousel icons={icons} />
      </div>
    );
}

export default App;
