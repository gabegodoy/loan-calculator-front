export async function calculateLoan(axios, data) {
    try {
        const response = await axios.post('/loan/calculate', data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error?.message);
    }
}