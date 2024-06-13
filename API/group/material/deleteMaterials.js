export async function removeMaterialFromGroup(materialId, groupId, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/Material/${groupId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': adminToken
            },
            body: JSON.stringify({ materialId: materialId })
        });

        if (!response.ok) {
            throw new Error('Failed to remove material from group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error removing material from group: ' + error.message);
    }
}