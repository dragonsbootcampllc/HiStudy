export async function updateCategoryRecommendedStatus(categoryId, isAdminToken, recommendedStatus) {
    try {
        const response = await fetch(`https://itc-academy.onrender.com/api/v1/category/recommended/${categoryId}`, {
            method: 'PUT',
            headers: {
                'Authorization': isAdminToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recommended: recommendedStatus
            })
        });

        if (!response.ok) {
            throw new Error('Failed to update category recommended status');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error updating category recommended status: ' + error.message);
    }
}