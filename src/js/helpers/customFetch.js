export const customFetch = async (jsonData, url, method = 'POST') => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: method === 'GET' ? null : jsonData,
        });

        const responseData = await response.json();

        return responseData;
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
    }
};
