import React from 'react';
import "./Annonce.css"

const Annonce = () => {
    return (
        <div className='annonce-card'>
            <div className="img">
             <img className='annonce-image' src="" alt="" />
            </div>
            <div className="card-footer">
                <p>Titre de l'annonce</p>
            </div>
        </div>
    );
};

export default Annonce;