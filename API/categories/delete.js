export async function deleteCategory(categoryId, token) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/category/${categoryId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete category');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error deleting category: ' + error.message);
    }
}