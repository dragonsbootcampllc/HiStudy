export async function forgetPassword(resetData) {
    try {
        const response = await fetch('https://itc-academy.onrender.com/api/v1/auth/forgetPassword', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resetData)
        });

        if (!response.ok) {
            throw new Error('Failed to reset password');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error resetting password: ' + error.message);
    }
}