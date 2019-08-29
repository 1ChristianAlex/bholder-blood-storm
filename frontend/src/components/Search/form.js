import React, { Component } from 'react';
import { SearchForm } from './styled';
import { FaSearch } from 'react-icons/fa';
export class BSearch extends Component {
  render() {
    return (
      <SearchForm.searchForm method="post">
        <SearchForm.searchGroup>
          <SearchForm.searchInput />
          <SearchForm.searchButton>
            <FaSearch />
          </SearchForm.searchButton>
        </SearchForm.searchGroup>
      </SearchForm.searchForm>
    );
  }
}
