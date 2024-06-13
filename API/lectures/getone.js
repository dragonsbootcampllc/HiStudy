export async function getLectureById(lectureId) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/lecture/${lectureId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch lecture');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching lecture: ' + error.message);
    }
}