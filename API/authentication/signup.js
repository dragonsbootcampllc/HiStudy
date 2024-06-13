export async function signUpUser(userDetails) {
    try {
        const response = await fetch('https://itc-academy.onrender.com/api/v1/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        });
        console.log('I am in Signup Isolated Function');

        if (!response.ok) {
            throw new Error('Failed to sign up user');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error signing up user: ' + error.message);
    }
}