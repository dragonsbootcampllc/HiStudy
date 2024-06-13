export async function updateGroup(groupId, groupName, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/${groupId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': adminToken
            },
            body: JSON.stringify({ name: groupName })
        });

        if (!response.ok) {
            throw new Error('Failed to update group information');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating group information: ' + error.message);
    }
}