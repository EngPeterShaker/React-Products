export const SEARCH = 'SEARCH';
export function search(value) {
    console.log('term in action' + value);
    return {
        type: SEARCH,
         value
    };
}
// export function fetchSearch(term) {

//     // const url = `${ROOT_URL}&q=${city},us`;
//     // const request = axios.get(url); //return a prmoise
//     // console.log("request", request);

// return {type: FETCH_SEARCH, payload: term}

// }