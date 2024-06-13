export async function getAllInstructors() {
    try {
        const response = await fetch('https://itc-academy.onrender.com/api/v1/Instructor/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch instructors');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error fetching instructors: ' + error.message);
    }
}