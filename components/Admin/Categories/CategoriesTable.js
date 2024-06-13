import { useState } from "react";
import UpdatePopup from '@/components/Admin/Categories/CategoryUpdatePopup'
import DeletePopup from '@/components/Admin/Categories/CategoryDeletePopup'
import RecoomendPopup from '@/components/Admin/Categories/CategoryRecommendPopup.js'
import { createCategory } from '@/API/categories/create';


const CategoriesTable = () => {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showRecommendPopup, setShowRecommendPopup] = useState(false);

  const [selectedItemId, setSelectedItemId] = useState('');
  const [selectedItemName, setSelectedItemName] = useState('');
  const [selectedItemDescription, setSelectedItemDescription] = useState('');
  const [selectedItemRecommendition, setSelectedItemRecommendition] = useState(false);


  const togglePopup = (popupType, id, name, description, recommendtion) => {
      setSelectedItemId(id);
      setSelectedItemName(name);
      setSelectedItemDescription(description);
      setSelectedItemRecommendition(recommendtion);
    if (popupType === 'update') {
      setShowUpdatePopup(!showUpdatePopup); 
      setShowDeletePopup(false);
      setShowRecommendPopup(false);
    } else if (popupType === 'delete') {
      setShowDeletePopup(!showDeletePopup); 
      setShowUpdatePopup(false);
      setShowRecommendPopup(false);
    } else if (popupType === 'recommend'){
      setShowRecommendPopup(!showRecommendPopup);
      setShowDeletePopup(false);
      setShowUpdatePopup(false);
    }
  }; 

  console.log(selectedItemRecommendition);

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Categories Handler</h4>
          </div>

          <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
            <table className="rbt-table table table-borderless">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Recommendition</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p className="b3 mb--5">createdAt</p>
                    <span className="h6 mb--5">
                        <a href="">Sample Name</a>
                    </span>
                    <p className="b3">
                        Sample Description
                    </p>
                  </th>
                  <td>
                    <span className="rbt-badge-5 bg-color-success-opacity color-success">
                      Pass
                    </span>
                  </td>
                  <td>
                    <div className="rbt-button-group justify-content-end">
                        <button
                            className="rbt-btn btn-xs bg-color-safe-opacity radius-round color-safe"
                            onClick={() => togglePopup('recommend', 'samepleID','samplename', 'Sample Description', true)}
                            title="Reccommendation"
                        >
                            <i className="fas fa-check-circle pl--0" />
                        </button>
                        <button
                            className="rbt-btn btn-xs bg-primary-opacity radius-round"
                            onClick={() => togglePopup('update', 'samepleID','samplename', 'Sample Description', true)}
                            title="Edit"
                        >
                            <i className="feather-edit pl--0" />
                        </button>
                        <button
                            className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                            onClick={() => togglePopup('delete', 'samepleID','samplename', 'Sample Description', true)}
                            title="Delete"
                        >
                            <i className="feather-trash-2 pl--0" />
                        </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br/>

      {showUpdatePopup && 
        <UpdatePopup 
          itemId={selectedItemId}
          itemName={selectedItemName}
          itemDescription={selectedItemDescription}
        />
      }
      {showDeletePopup && 
        <DeletePopup 
          itemId={selectedItemId} 
          itemName={selectedItemName}
          itemDescription={selectedItemDescription}
        />
      }
      {showRecommendPopup && 
        <RecoomendPopup 
          itemId={selectedItemId} 
          itemName={selectedItemName}
          itemDescription={selectedItemDescription}
          itemRecommendition = {selectedItemRecommendition}
        />
      }
    </>
  );
};

export default CategoriesTable;