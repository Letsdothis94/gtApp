import { useState } from "react";
import * as React from 'react';
import { Button } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

const FilterBar = ({
//   genders,
  onNameFilter,
  onGenderFilter,
  onDateFilter,
  refreshPage
}) => {
  const [filters, setFilters] = useState({
    name: "",
    gender: "",
    from: "",
    to: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "title":
        onNameFilter(value);
        break;
    //   case "gender":
    //     onGenderFilter(value);
    //     break;
      case "from":  
        onDateFilter(value, "from");
        break;
    //   case "to":
    //     break;
      default:
        break;
    }
  };

  return (
    <div className="filter-cont">
      <div className="title-cont">
        <h2 className="border-bottom">Filters</h2>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <label style={{fontSize: '23px'}}htmlFor="name">Title: </label>
        <input
          type="text"
          className="title-input"
          id="name"
          placeholder="Search Event"
          value={filters.title}
          onChange={handleInput("title")}
        />
        <Button variant="contained" style={{background: '#383838'}} onClick={refreshPage}><RefreshIcon/></Button>
      </div>

      {/* <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          onChange={handleInput("gender")}
        >
          <option value="">Select</option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div> */}

      {/* <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div> */}
      {/* <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={handleInput("to")}
        />
      </div> */}
      
      {/* <button onClick={refreshPage}>refresh</button> */}
      
    </div>
  );
};

export default FilterBar;


