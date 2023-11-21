import React from 'react';

const Table = ({ id, text, isSelected, isSelectable, onClick }) => {
  const tableClassName = isSelected ? 'table selected' : 'table';

  return (
    <div
      className={isSelectable ? tableClassName : 'table masked'}
      onClick={isSelectable ? onClick : null}
    >
      <span className="table-info text-white">Table Type {id}</span>
      {text && <span className="table-text">{text}</span>}
    </div>
  );
};

export default Table;
