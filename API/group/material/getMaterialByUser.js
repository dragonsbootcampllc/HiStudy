export async function getMaterialsForGroup(groupId, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/Material/${groupId}`, {
            method: 'GET',
            headers: {
                'Authorization': adminToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch materials for group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching materials for group: ' + error.message);
    }
}