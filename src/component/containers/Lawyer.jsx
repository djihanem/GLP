import Navbar from "../NavBar";
import Footer from "../Footer";
import React, { useState, useEffect } from 'react';
import FilterComponent from '../FilterComponent';
import LawyerListComponent from '../LawyerListComponent';
import PaginationComponent from '../PaginationComponent';
const Lawyer = () => {
    const [lawyers, setLawyers] = useState([]);
    const [filters, setFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        // Ici, vous pouvez appeler une API pour récupérer la liste des avocats en fonction des filtres et de la pagination
    }, [filters, currentPage]);

    const handleSearch = (e) => {
        // Mettre à jour les filtres de recherche
    };

    const handleFilterChange = (e) => {
        // Mettre à jour les filtres avancés
    };
    return ( 
        <div>
            <Navbar />


            <h1>Recherche d'Avocats</h1>
            <FilterComponent onSearch={handleSearch} onFilterChange={handleFilterChange} />
            <LawyerListComponent lawyers={lawyers} />
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />


            <Footer/>
        </div>
     );
}
 
export default Lawyer;
