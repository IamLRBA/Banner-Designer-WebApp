import React from "react";
import { FaTable, FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";

const TableControls = ({
  showTableOptions,
  setShowTableOptions,
  showAddOptions,
  setShowAddOptions,
  showRemoveOptions,
  setShowRemoveOptions,
}) => {
  return (
    <>
      <label onClick={() => setShowTableOptions(!showTableOptions)}>
        Table <FaChevronDown />
      </label>
      {showTableOptions && (
        <div className="dropdown">
          <div className="tooltip-container">
            <button className="table-btn">
              <FaTable />
            </button>
            <span className="tooltip">Create</span>
          </div>
          <div className="dropdown-container">
            <div className="tooltip-container">
              <button
                className="table-btn"
                onClick={() => setShowAddOptions(!showAddOptions)}
              >
                <FaPlus />
              </button>
              <span className="tooltip">Add</span>
            </div>
            {showAddOptions && (
              <div className="sub-dropdown">
                <button>Add Row</button>
                <button>Add Column</button>
              </div>
            )}
          </div>
          <div className="dropdown-container">
            <div className="tooltip-container">
              <button
                className="table-btn"
                onClick={() => setShowRemoveOptions(!showRemoveOptions)}
              >
                <FaMinus />
              </button>
              <span className="tooltip">Remove</span>
            </div>
            {showRemoveOptions && (
              <div className="sub-dropdown">
                <button>Remove Row</button>
                <button>Remove Column</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TableControls;