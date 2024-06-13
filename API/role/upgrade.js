export async function upgradeUserRole(userId, newRole, adminToken) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/User/upgrade-role/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': adminToken
            },
            body: JSON.stringify({ newRole: newRole })
        });

        if (!response.ok) {
            throw new Error('Failed to upgrade user role');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error upgrading user role: ' + error.message);
    }
}