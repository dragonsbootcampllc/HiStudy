export async function getAllCategories() {
    try {
        const response = await fetch('https://itc-academy.onrender.com/api/v1/category/', {
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