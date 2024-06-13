const baseUrl = 'https://itc-academy.onrender.com/api/v1/Course/';

// Function to create a course
async function createCourse(title, description, instructorId, total_duration, price, imageFile, token) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('instructorId', instructorId);
    formData.append('total_duration', total_duration);
    formData.append('price', price);
    formData.append('image', imageFile);

    try {
        const response = await fetch('https://itc-academy.onrender.com/api/v1/Course', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        });

        if (!response.ok) {
            // Handle non-2xx responses
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create course');
        }

        const responseData = await response.json();
        return responseData.savedCourse;
    } catch (error) {
        // Handle network errors or other exceptions
        console.error('Error creating course:', error);
        throw new Error('Failed to create course');
    }
}

// Function to update a course
async function updateCourse(courseId, title, description, instructorId, total_duration, price, imageFile, token) {
    // Create a FormData object to send data as multipart/form-data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('instructorId', instructorId);
    formData.append('total_duration', total_duration);
    formData.append('price', price);
    formData.append('image', imageFile);

    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Course/${courseId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        });

        if (!response.ok) {
            // Handle non-2xx responses
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update course');
        }

        const responseData = await response.json();
        return responseData.data;
    } catch (error) {
        // Handle network errors or other exceptions
        console.error('Error updating course:', error);
        throw new Error('Failed to update course');
    }
}

// Function to get all courses
async function getAllCourses() {
    try{
        const response = await fetch('https://itc-academy.onrender.com/api/v1/Course/');
        return await response.json();
    } catch(err){
        console.error(err);
    }
}

// Function to get a course by ID
async function getCourseById(id, token) {
    const response = await fetch(`${baseUrl}${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return await response.json();
}

// Function to delete a course by ID
async function deleteCourseById(id, token) {
    const response = await fetch(`${baseUrl}${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return await response.json();
}

// Function to update course approval status
async function updateCourseApprovalStatus(courseId, approvalStatus, token) {
    const response = await fetch(`${baseUrl}approvalStatus/${courseId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ approvalStatus })
    });

    return await response.json();
}

// Function to update course rating
async function updateCourseRating(id, rating, token) {
    const response = await fetch(`${baseUrl}course/${id}/rating`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ rating })
    });

    return await response.json();
}

// Function to add review to a course
async function addReviewToCourse(id, text, token) {
    const response = await fetch(`${baseUrl}cours/${id}/review`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ text })
    });

    return await response.json();
}


export {
    createCourse,
    updateCourse,
    getAllCourses,
    getCourseById,
    deleteCourseById,
    updateCourseApprovalStatus,
    updateCourseRating,
    addReviewToCourse
};