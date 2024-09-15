import axios from 'axios';

export async function getAllMessages() {
    try {
        const response = await axios.get('https://89.116.227.101:8555/messages');
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
}

export async function addMessage(msg) {
    try {
        const response = await axios.post('https://89.116.227.101:8555/messages', msg, {
            headers: {
                "Content-Type": "application/json"   
            }
        });
        return response;
    } catch (error) {
        console.error('Error inserting message:', error);
        throw error;
    }
}
