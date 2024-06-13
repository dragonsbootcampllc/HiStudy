export async function deleteGroup(groupId, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/${groupId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': adminToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error deleting group: ' + error.message);
    }
}