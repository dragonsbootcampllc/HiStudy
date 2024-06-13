export async function getAllCategories(name, description, image) {
    try {
        const queryString = new URLSearchParams({ name, description, image }).toString();
        const url = `https://itc-academy.onrender.com/api/v1/category/AllCategories?${queryString}`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching categories: ' + error.message);
    }
}