import React, { useState } from 'react';
import Link from "next/link";

function CategoryDeleteForm({itemId, itemName, itemDescription}) {
    const [error, setError] = useState(null);


    return (
        <div className='rbt-dashboard-content bg-color-white rbt-shadow-box'>
            <div className="section-title">
                <h4 className="rbt-title-style-3">Are You Sure to Delete Category {itemName} ?</h4>
                <div>
                    <p>You Are Deleting The Category {itemName}. </p>
                    <p>It's Description: {itemDescription}. </p>
                    <Link className='rbt-btn btn-secondary' href="#">
                        Confirm Deletion
                    </Link>
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
        </div>
    );
}

export default CategoryDeleteForm;