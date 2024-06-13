export async function updateInstructorImage(instructorId, imageFile) {
    try {
        const formData = new FormData();
        formData.append('image', imageFile);

        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Instructor/update/${instructorId}`, {
            method: 'PUT',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to update instructor image');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating instructor image: ' + error.message);
    }
}