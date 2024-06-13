export async function deleteQuestionOption(questionId, optionId, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Question/${questionId}/${optionId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': instructorToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete question option');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error deleting question option: ' + error.message);
    }
}