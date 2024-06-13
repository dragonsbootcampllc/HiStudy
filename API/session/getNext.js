export async function getSessionsInGroup(groupId, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/${groupId}/Session`, {
            method: 'GET',
            headers: {
                'Authorization': adminToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch sessions in group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching sessions in group: ' + error.message);
    }
}