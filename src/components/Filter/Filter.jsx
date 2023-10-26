import React from "react";
import { FilterSection } from "./Filter.Styled";
import { useDispatch } from "react-redux";
import { filterUpdate } from "redux/filter/filterSlice";


export const Filter = ({ value, onChange }) => {

  const dispatch = useDispatch();
  const updateFilter = e => {
    dispatch(filterUpdate(e.target.value))
  };

    return (
        <FilterSection>
        <label htmlFor='filter'>Find contacts by name</label>
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            id='filter'
            value={value}
            onChange={updateFilter}
            />
            </FilterSection>
    );
};