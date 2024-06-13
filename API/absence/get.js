export async function getAbsencesForLecture(lectureId, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Absence/${lectureId}`, {
            method: 'GET',
            headers: {
                'Authorization': instructorToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch absences for lecture');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching absences for lecture: ' + error.message);
    }
}