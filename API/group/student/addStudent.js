export async function addStudentsToGroup(groupId, studentList, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/${groupId}/addStudents`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': adminToken
            },
            body: JSON.stringify({ students: studentList })
        });

        if (!response.ok) {
            throw new Error('Failed to add students to group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error adding students to group: ' + error.message);
    }
}