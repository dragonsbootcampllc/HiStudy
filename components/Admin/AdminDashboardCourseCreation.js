import React, { useState } from 'react';

const CourseCreationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    instructorId: '',
    total_duration: '',
    price: '',
    image: null,
    description: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://itc-academy.onrender.com/api/v1/Course/65b4512143c7631b80f0c18a', {
        method: 'POST',
        headers: {
          'Authorization': '{{instructor}}',
          // Assuming the server expects form data
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(), // Convert form data to URL-encoded format
      });

      if (!response.ok) {
        throw new Error('Failed to create course');
      }

      const data = await response.json();
      console.log('Course created successfully:', data);
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <div id='create-course' className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
        <h4 className="rbt-title-style-3">Create a New Course</h4>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title:</label>
                <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                required
                />
            </div>
            <div className="form-group">
                <label>Content:</label>
                <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="form-control"
                required
                />
            </div>
            <div className="form-group">
                <label>Instructor ID:</label>
                <input
                type="text"
                name="instructorId"
                value={formData.instructorId}
                onChange={handleChange}
                className="form-control"
                required
                />
            </div>
            <div className="form-group">
                <label>Total Duration:</label>
                <input
                type="text"
                name="total_duration"
                value={formData.total_duration}
                onChange={handleChange}
                className="form-control"
                required
                />
            </div>
            <div className="form-group">
                <label>Price:</label>
                <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
                required
                />
            </div>
            <div className="form-group">
                <label>Course Image:</label>
                <br/>
                <input
                type="file"
                name="image"
                onChange={handleChange}
                className="form-control-file"
                required
                />
            </div>
            <div className="form-group">
                <label>Description:</label>
                <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                required
                />
            </div>
            <button type="submit" className="btn btn-primary">Create a New Course</button>
        </form>
    </div>
  );
};

export default CourseCreationForm;