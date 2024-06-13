export async function sendCodeToEmail(email) {
    try {
        const response = await fetch('https://itc-academy.onrender.com/api/v1/auth/sendCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        });

        if (!response.ok) {
            throw new Error('Failed to send code to email');
        }

        return response.json();
    } catch (error) {
        throw new Error('Error sending code to email: ' + error.message);
    }
}