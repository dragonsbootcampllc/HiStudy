export async function addMaterialsToGroup(groupId, materialList, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/${groupId}/materials`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': adminToken
            },
            body: JSON.stringify({ materials: materialList })
        });

        if (!response.ok) {
            throw new Error('Failed to add materials to group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error adding materials to group: ' + error.message);
    }
}