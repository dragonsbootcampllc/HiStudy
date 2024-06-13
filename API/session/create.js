export async function createSessionInGroup(groupId, sessionData, instructorToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/group/${groupId}/Session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': instructorToken
            },
            body: JSON.stringify(sessionData)
        });

        if (!response.ok) {
            throw new Error('Failed to create session in group');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error creating session in group: ' + error.message);
    }
}