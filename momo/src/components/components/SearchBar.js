import React from 'react';
import SearchBar from '@ant-design/react-native/lib/search-bar';


export default class Search extends React.Component{
  state = {
    value: 'Search',
  };

  onChange = (value) => {
    this.setState({ value });
  }

  clear = () => {
    this.setState({ value: '' });
  }

  render() {
    return (
        <SearchBar
          value={this.state.value}
          placeholder="Search"
          onSubmit={() =>{}}
          onCancel={this.clear}
          onChange={this.onChange}
          
        />
    );
  }
}