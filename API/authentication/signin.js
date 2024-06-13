export async function signInUser(userData) {
    try {
        const response = await fetch('https://itc-academy.onrender.com/api/v1/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        console.log(response);

        if (!response.ok) {
            throw new Error('Failed to sign in user');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error signing in user: ' + error.message);
    }
}