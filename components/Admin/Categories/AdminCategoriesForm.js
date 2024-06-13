import React, { useState } from 'react';
import { createCategory } from '@/API/categories/create';

import Image from "next/image";
import img from "../../../public/images/others/thumbnail-placeholder.svg";

import {getUserDataFromLocalStorage} from '@/pages/useraction'

function CategoryForm() {
    
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: null,
    });
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState(img);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const authToken = 'jsonified.token';
          const response = await createCategory(formData, authToken);
          
          console.log('Category created:', response);
          // Handle success, show message, update state, etc.
        } catch (error) {
          // Error handling can be done here
          console.error('Error creating category:', error.message);
          // Handle error, show error message, etc.
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
    };

    return (
        <div>
            <div className="section-title">
                <h4 className="rbt-title-style-3">Categories Creation</h4>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="col-lg-6">
                    <h6>Category Name:</h6>
                    <div className="form-group">
                    <input
                        name="name"
                        type="text"
                        placeholder="Category Name*"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-border"></span>
                    </div>
                </div>
                <div className="col-lg-12">
                    <h6>Category Description:</h6>
                    <div className="form-group">
                    <textarea
                        name="description"
                        type="text"
                        placeholder="Category Description*"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <span className="focus-border"></span>
                    </div>
                </div>
                
                <div className="course-field mb--20">
                    <h6>Category Thumbnail</h6>
                    <div className="rbt-create-course-thumbnail upload-area">
                        <div className="upload-area">
                        <div className="brows-file-wrapper" data-black-overlay="9">
                            <input
                                name="image"
                                id="createinputfile"
                                type="file"
                                className="inputfile"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <Image
                                id="createfileImage"
                                src={imageUrl}
                                width={797}
                                height={262}
                                alt="file image"
                            />

                            <label
                                className="d-flex"
                                htmlFor="createinputfile"
                                title="No File Choosen"
                            >
                                <i className="feather-upload"></i>
                                <span className="text-center">Choose a File</span>
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <button
                        className="rbt-btn btn-gradient hover-icon-reverse w-100 text-center"
                        type="submit"
                    >
                        <span className="icon-reverse-wrapper">
                            <span className="btn-text">Create Category</span>
                            <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                            </span>
                            <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                            </span>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CategoryForm;