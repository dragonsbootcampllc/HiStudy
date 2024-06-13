export async function updateCategory(categoryId, name, token) {
    try {
        const formData = new FormData();
        formData.append('name', name);

        const response = await fetch(`https://itc-academy.onrender.com/api/v1/category/${categoryId}`, {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to update category');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating category: ' + error.message);
    }
}