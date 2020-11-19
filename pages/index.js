import React from 'react';
import ListBox from 'components/ListBox';
import DropDown from 'components/DropDown';
import Toggle from 'components/Toggle';
import Input from 'components/Input';

const Home = () => {
  return (
    <div className="container mx-auto bg-red-100 p-4">
      <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">
        <div className="bg-green-400 p-1 rounded-md hover:bg-red-500 ease-in-out transition duration-150">
          1
        </div>
        <div className="bg-green-400 p-1">1</div>
        <div className="bg-green-400 p-1">1</div>
        <div className="bg-green-400 p-1">1</div>
      </div>

      <DropDown />
      <ListBox />
      <Toggle />
      <Input />
    </div>
  );
};

export default Home;
