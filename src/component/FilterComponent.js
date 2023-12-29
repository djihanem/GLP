// FilterComponent.js
import React from 'react';

const FilterComponent = ({ onSearch, onFilterChange }) => {
    return (
        <div>
            <input type="text" placeholder="Rechercher par nom, spécialité, localisation, etc." onChange={onSearch} />
            <select onChange={onFilterChange}>
                <option value="specialite">Spécialité</option>
                <option value="langue">Langue</option>
                <option value="ville">Ville</option>
            </select>
            {/* Ajoutez d'autres options de filtrage ici */}
        </div>
    );
};
export default FilterComponent;