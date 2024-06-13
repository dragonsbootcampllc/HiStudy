export async function updateExam(courseId, examId, examData, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Course/${courseId}/exam/update/${examId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': instructorToken
            },
            body: JSON.stringify(examData)
        });

        if (!response.ok) {
            throw new Error('Failed to update exam');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating exam: ' + error.message);
    }
}