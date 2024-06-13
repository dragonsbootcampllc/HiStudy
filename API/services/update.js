export async function updateService(serviceId, localAdminToken, updatedServiceData) {
    try {
        const formData = new FormData();
        for (const key in updatedServiceData) {
            formData.append(key, updatedServiceData[key]);
        }

        const response = await fetch(`http://localhost:3000/api/v1/Service/${serviceId}`, {
            method: 'PUT',
            headers: {
                'Authorization': localAdminToken
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to update service');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating service: ' + error.message);
    }
}