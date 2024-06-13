export async function getGroupForStudent(studentId, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/students/${studentId}`, {
            method: 'GET',
            headers: {
                'Authorization': adminToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch group information for student');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching group information for student: ' + error.message);
    }
}