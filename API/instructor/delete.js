export async function deleteInstructor(instructorId, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Instructor/${instructorId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': instructorToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete instructor');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error deleting instructor: ' + error.message);
    }
}