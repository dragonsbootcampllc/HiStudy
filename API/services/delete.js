export async function deleteService(serviceId, token) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/Service/${serviceId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete service');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error deleting service: ' + error.message);
    }
}