export async function getAllGroups(adminToken) {
    try {
        const response = await fetch('https://itc-academy.onrender.com/api/v1/group/', {
            method: 'GET',
            headers: {
                'Authorization': adminToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch groups');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching groups: ' + error.message);
    }
}