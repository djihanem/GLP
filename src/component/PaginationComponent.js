// PaginationComponent.js

import React from 'react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
    
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination">
            {pages.map(page => (
                <button 
                    key={page} 
                    className={currentPage === page ? 'active' : ''} 
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default PaginationComponent;
