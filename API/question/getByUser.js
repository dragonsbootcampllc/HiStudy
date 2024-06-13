export async function getQuestion(questionId, userToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Question/${questionId}`, {
            method: 'GET',
            headers: {
                'Authorization': userToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch question');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching question: ' + error.message);
    }
}