export async function getGroupById(groupId, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/${groupId}`, {
            method: 'GET',
            headers: {
                'Authorization': adminToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch group information');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching group information: ' + error.message);
    }
}