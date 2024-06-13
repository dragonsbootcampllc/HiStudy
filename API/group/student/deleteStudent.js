export async function removeStudentsFromGroup(studentId, groupId, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/students/${studentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': adminToken
            },
            body: JSON.stringify({ groupId: groupId })
        });

        if (!response.ok) {
            throw new Error('Failed to remove student from group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error removing student from group: ' + error.message);
    }
}