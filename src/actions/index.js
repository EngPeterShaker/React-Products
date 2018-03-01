export const SEARCH = 'SEARCH';
export function search(value) {
    console.log('term in action' + value);
    return {
        type: SEARCH,
         value
    };
}
