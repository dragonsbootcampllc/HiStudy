export async function getCourseExam(courseId, examId, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Course/${courseId}/exam/${examId}`, {
            method: 'GET',
            headers: {
                'Authorization': instructorToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch course exam');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching course exam: ' + error.message);
    }
}
