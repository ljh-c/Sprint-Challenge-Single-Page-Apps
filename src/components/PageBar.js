import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function PageBar({ handleClick, currentPage, pageCount }) {
  return (
    <Pagination aria-label="page navigation">
    
    <PaginationItem disabled={currentPage <= 0}>
      <PaginationLink 
        previous href="#" 
        onClick={event => handleClick(event, currentPage - 1)} 
      />
    </PaginationItem>

    {[...Array(pageCount)].map((page, index) => {
      return (
        <PaginationItem active={index === currentPage} key={index}>
        <PaginationLink 
          onClick={event => handleClick(event, index)} 
          href="#">
            {index + 1}
        </PaginationLink>
        </PaginationItem>
      );
    })}

    <PaginationItem disabled={currentPage >= (pageCount - 1)}>
      <PaginationLink 
        onClick={event => handleClick(event, currentPage + 1)}
        next href="#" />
    </PaginationItem>

    </Pagination>
  );
}