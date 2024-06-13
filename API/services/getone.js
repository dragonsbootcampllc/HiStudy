export async function getServiceById(serviceId) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/Service/${serviceId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch service');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching service: ' + error.message);
    }
}