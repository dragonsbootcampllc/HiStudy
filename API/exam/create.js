export async function createExam(courseId, examData, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Course/${courseId}/exam/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': instructorToken
            },
            body: JSON.stringify(examData)
        });

        if (!response.ok) {
            throw new Error('Failed to create exam');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error creating exam: ' + error.message);
    }
}