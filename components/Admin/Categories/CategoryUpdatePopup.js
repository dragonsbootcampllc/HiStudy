import React, { useState } from 'react';
import { createCategory } from '@/API/categories/create';

import Image from "next/image";

import img from "../../../public/images/others/thumbnail-placeholder.svg";

function CategoryUpdateForm({itemId, itemName, itemDescription}) {
    const [name, setName] = useState(itemName);
    const [description, setDescription] = useState(itemDescription);
    const [image, setImage] = useState(null); 
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState(img);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS…1NDh9.iwtIjVrOqZOPP9N-MGFYzClJYgeHo9Q6KI5J0tZJZzA'; 
            const response = await createCategory(token, name, description, image);
            console.log('Category created:', response);
            setName('');
            setDescription('');
            setImage(null);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
    };

    return (
        <div className='rbt-dashboard-content bg-color-white rbt-shadow-box'>
            <div className="section-title">
                <h4 className="rbt-title-style-3">Categories Update</h4>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <span className="focus-border"></span>
                    </div>
                </div>
                <div className="col-lg-12">
                    <h6>Category Description:</h6>
                    <div className="form-group">
                    <textarea
                        name="name"
                        type="text"
                        placeholder="Category Description*"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <span className="focus-border"></span>
                    </div>
                </div>
                
                <div className="course-field mb--20">
                    <h6>You Have to Update The Category Thumbnail (Required) *</h6>
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
                                required
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
                            <span className="btn-text">Update Category {itemName} </span>
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

export default CategoryUpdateForm;