
export const QuickPollUrls = (pollId:string ='',voteId:string='')=>{
    pollId = pollId ? `/${pollId}`:'';
    voteId = voteId ? `/${voteId}`:'';
    return {
        polls: `http://10.33.121.90:6001/v1/poll${pollId}`,
        votes: `http://10.33.121.90:6001/v1/poll${pollId}/vote${voteId}`
    }
}
export const USER_URL = `http://10.33.121.90:7410/price-check/user`;
export const LOGIN_URL = `http://10.33.121.90:7410/price-check/login`;