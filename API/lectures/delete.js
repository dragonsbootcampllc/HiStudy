export async function deleteLecture(lectureId, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/lecture/${lectureId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': instructorToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete lecture');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error deleting lecture: ' + error.message);
    }
}