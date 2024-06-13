export async function createLecture(courseId, instructorToken, lectureData) {
    try {
        const formData = new FormData();
        for (const key in lectureData) {
            formData.append(key, lectureData[key]);
        }

        const response = await fetch(`https://itc-academy.onrender.com/api/v1/lecture/create/${courseId}`, {
            method: 'POST',
            headers: {
                'Authorization': instructorToken
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to create lecture');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error creating lecture: ' + error.message);
    }
}