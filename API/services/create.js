export async function createService(courseId, token, serviceData) {
    try {
        const formData = new FormData();
        for (const key in serviceData) {
            formData.append(key, serviceData[key]);
        }

        const response = await fetch(`https://itc-academy.onrender.com/api/v1/Service/create/${courseId}`, {
            method: 'POST',
            headers: {
                'Authorization': token
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to create service');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error creating service: ' + error.message);
    }
}