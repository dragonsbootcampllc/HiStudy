export async function updateInstructorActiveStatus(instructorId, adminToken, activeStatus) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Instructor/${instructorId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': adminToken
            },
            body: JSON.stringify({ ActiveStatus: activeStatus })
        });

        if (!response.ok) {
            throw new Error('Failed to update instructor active status');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating instructor active status: ' + error.message);
    }
}