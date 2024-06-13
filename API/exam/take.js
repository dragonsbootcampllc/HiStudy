export async function updateExamAnswers(courseId, examId, userToken, answers) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Course/${courseId}/exam/${examId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userToken
            },
            body: JSON.stringify({ Answers: answers })
        });

        if (!response.ok) {
            throw new Error('Failed to update exam answers');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating exam answers: ' + error.message);
    }
}