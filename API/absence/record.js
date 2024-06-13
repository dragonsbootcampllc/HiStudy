export async function recordAbsence(lectureId, absentStudents, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Absence/${lectureId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': instructorToken
            },
            body: JSON.stringify({ absentStudents: absentStudents })
        });

        if (!response.ok) {
            throw new Error('Failed to record absence');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error recording absence: ' + error.message);
    }
}