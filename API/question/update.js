export async function updateQuestion(questionId, questionData, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Question/${questionId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': instructorToken
            },
            body: JSON.stringify(questionData)
        });

        if (!response.ok) {
            throw new Error('Failed to update question');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating question: ' + error.message);
    }
}