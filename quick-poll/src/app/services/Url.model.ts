export const API_BASE_URL:string = 'http://localhost';
export const QuickPollUrls = (pollId:string ='',voteId:string='')=>{
    pollId = pollId ? `/${pollId}`:'';
    voteId = voteId ? `/${voteId}`:'';
    return {
        polls: `${API_BASE_URL}:6001/v1/poll${pollId}`,
        votes: `${API_BASE_URL}:6001/v1/poll${pollId}/vote${voteId}`
    }
}
export const USER_URL =  `${API_BASE_URL}:7410/price-check/user`;
export const LOGIN_URL = `${API_BASE_URL}:7410/price-check/login`;