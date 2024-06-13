export async function getCourseExams(courseId, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Course/${courseId}/exam/`, {
            method: 'GET',
            headers: {
                'Authorization': instructorToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch course exams');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching course exams: ' + error.message);
    }
}