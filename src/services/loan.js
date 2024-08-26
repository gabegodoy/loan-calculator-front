// export async function calculateLoan(axios, data){
//     console.log('calculateLoan', data);
//     try {
//         const response = await axios.post('/loan/calculate', data);
//         return { response, error: null };

//     } catch (error) {
//         console.error (error);
//         return { response: null, error: error?.message };
//     }
// }

export async function calculateLoan(axios, data) {
    console.log('calculateLoan', data);
    try {
        const response = await axios.post('/loan/calculate', data);
        return response.data; // Return just the data for useQuery
    } catch (error) {
        console.error(error);
        throw new Error(error?.message); // Throw error so useQuery can handle it
    }
}