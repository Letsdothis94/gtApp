import { useState } from "react";

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
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.title}
          onChange={handleInput("title")}
        />
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

      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>
      {/* <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={handleInput("to")}
        />
      </div> */}
      <button onClick={refreshPage}>refresh</button>
    </div>
  );
};

export default FilterBar;
