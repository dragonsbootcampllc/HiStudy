export async function createGroup(groupData, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': adminToken
            },
            body: JSON.stringify(groupData)
        });

        if (!response.ok) {
            throw new Error('Failed to create group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error creating group: ' + error.message);
    }
}