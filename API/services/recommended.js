export async function updateRecommendedStatus(serviceId, recommendedStatus, token) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/Service/recommended/${serviceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ recommended: recommendedStatus })
        });

        if (!response.ok) {
            throw new Error('Failed to update recommended status');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating recommended status: ' + error.message);
    }
}