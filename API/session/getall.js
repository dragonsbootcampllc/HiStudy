export async function getGroupSessions(groupId, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/${groupId}/Session`, {
            method: 'GET',
            headers: {
                'Authorization': adminToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch sessions within the group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching sessions within the group: ' + error.message);
    }
}