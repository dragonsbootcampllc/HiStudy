export async function deleteExam(courseId, examId, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Course/${courseId}/exam/${examId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': instructorToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete exam');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error deleting exam: ' + error.message);
    }
}