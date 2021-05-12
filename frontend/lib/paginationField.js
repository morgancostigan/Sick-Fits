import {PAGINATION_QUERY} from '../components/Pagination';

export default function paginationField() {
    return {
        keyArgs: false, //tells Apollo we will deal with this
        read(existing =[], { args, cache }) {
            //Apollo asks read function for allProducts
            console.log({existing, args, cache});
            const { skip, first } = args;
            //read # of items on page from cache
            const data = cache.readQuery({ query: PAGINATION_QUERY });
            const count = data?._allProductsMeta?.count;

            

            //we can do 1 of 2 things...
            // 1. return the items that are already in cache
            // or 2. return 'false' triggering a network request for the items
        },
        merge() {
            // this runs when Apollo brings data back from the network request

        }
    };
};