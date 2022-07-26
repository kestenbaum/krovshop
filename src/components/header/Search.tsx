import React, {FC} from 'react';

interface ISearch
    extends React.HTMLProps<HTMLInputElement> {}

const Search:FC<ISearch> = (props) => {

    return (
       <input
          className='search'
          placeholder='Поиско по товарам...'
       />
    );
};

export default Search;