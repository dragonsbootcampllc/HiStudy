export async function updateExamStatus(courseId, examId, examStatus, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Course/${courseId}/exam/${examId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': adminToken
            },
            body: JSON.stringify({ ExamStatus: examStatus })
        });

        if (!response.ok) {
            throw new Error('Failed to update exam status');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating exam status: ' + error.message);
    }
}