import React, { useState } from 'react';
import Link from "next/link";

function CategoryReccomendForm({itemId, itemName, itemDescription, itemRecommendition}) {
    const [error, setError] = useState(null);
    const [selectedItemRecommendition, setSelectedItemRecommendition] = useState(itemRecommendition);

    return (
        <div className='rbt-dashboard-content bg-color-white rbt-shadow-box'>
            <div className="section-title">
                <h4 className="rbt-title-style-3">{itemName} Recommendition State Toggle</h4>
                <div>
                    <p>You Are Toggle Recommendition for The Category {itemName}. </p>
                    <p>It's Description: {itemDescription}. </p>
                    <p>Current State: {selectedItemRecommendition ? 'Recommended' : 'Unrecommended'}.</p>
                    <Link className='rbt-btn btn-secondary' href="#">
                        Confirm Toggle
                    </Link>
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
        </div>
    );
}

export default CategoryReccomendForm;