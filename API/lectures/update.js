export async function updateLecture(lectureId, lectureData) {
    try {
        const formData = new FormData();
        for (const key in lectureData) {
            formData.append(key, lectureData[key]);
        }

        const response = await fetch(`https://itc-academy.onrender.com/api/v1/lecture/${lectureId}`, {
            method: 'PUT',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to update lecture');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating lecture: ' + error.message);
    }
}