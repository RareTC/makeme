import sendRequest from "./send-request";
const BASE_URL= '/api/markdowns';

export async function saveMarkdown(savedMarkdown) {
    console.log(savedMarkdown, 'savedMark')
    return sendRequest(`${BASE_URL}/save`, 'POST', savedMarkdown)
}

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/saved`);
}