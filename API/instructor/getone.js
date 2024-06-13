export async function getInstructorById(instructorId) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Instructor/${instructorId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch instructor');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching instructor: ' + error.message);
    }
}