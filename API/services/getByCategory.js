export async function getServicesByCategoryId(categoryId) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/Service/services/${categoryId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch services');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching services: ' + error.message);
    }
}