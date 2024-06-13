export async function createOrUpdateQuestion(questionId, questionData, instructorToken) {
    try {
        const apiUrl = questionId ? `https://itc-academy.onrender.com/api/v1/Question/${questionId}` : 'https://itc-academy.onrender.com/api/v1/Question';
        const method = questionId ? 'PUT' : 'POST';

        const response = await fetch(apiUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': instructorToken
            },
            body: JSON.stringify(questionData)
        });

        if (!response.ok) {
            throw new Error('Failed to create/update question');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error creating/updating question: ' + error.message);
    }
}