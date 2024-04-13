import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setDataStore } from "../../reducers/filteresreducer";
import { category } from "../../store/Data";
function Filters(props) {
  const dispatch = useDispatch();
  const { offset, price_min, price_max, categoryId, limit } = useSelector(
    (state) => state.persistedReducer.filterData
  );

  const hndlchange = (e, value) => {
    if (e == true) {
      console.log("e", value);
      dispatch(
        setDataStore({
          categoryId: value?.id,
        })
      );
    } else {
      console.log("opppppppppp");
      dispatch(
        setDataStore({
          categoryId: null,
        })
      );
    }
  };
  const clearAllFilters = () => {
    dispatch(
      setDataStore({
        categoryId: null,
        price_min:0,
        price_max: 50000,
        categoryId: null,
        offset: 0,
      })
    );
  }
  return (
    <>
      {/* ------Price max && min filter------ */}
      <div className="filterBox">
      <div className="pagination">
        <button className="btn_clear" onClick={clearAllFilters}>clear filter</button>
      </div>
        <div className="filter-item">
          <label>Min Price: </label>
          <input
            min="0"
            type="number"
            value={price_min}
            onChange={(e) =>
              dispatch(
                setDataStore({
                  price_min: e.target.value,
                })
              )
            }
          />
        </div>
        <div className="filter-item">
          <label>Max Price: </label>
          <input
            min="0"
            type="number"
            value={price_max}
            onChange={(e) =>
              dispatch(
                setDataStore({
                  price_max: e.target.value,
                })
              )
            }
          />
        </div>
        {/* ------category filter--------- */}
        <div className="filter-item">
          <label>Category: </label>
          <ul className="list-none">
            {category.map((list, index) => (
              <li>
                <input
                  type="checkbox"
                  value={list.id}
                  checked={categoryId === list?.id}
                  onChange={(e) => hndlchange(e.target.checked, list)}
                />
                {list.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Filters;
