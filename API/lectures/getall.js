export async function getAllLectures() {
    try {
        const response = await fetch('https://itc-academy.onrender.com/api/v1/lecture/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch lectures');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching lectures: ' + error.message);
    }
}