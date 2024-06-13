export async function getCategoryById(categoryId, name, description, image) {
    try {
        const queryString = new URLSearchParams({ name, description, image }).toString();
        const url = `https://itc-academy.onrender.com/api/v1/category/${categoryId}?${queryString}`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch category');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching category: ' + error.message);
    }
}