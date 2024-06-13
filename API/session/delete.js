export async function deleteSessionInGroup(groupId, sessionId, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/${groupId}/Session/${sessionId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': adminToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete session in group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error deleting session in group: ' + error.message);
    }
}