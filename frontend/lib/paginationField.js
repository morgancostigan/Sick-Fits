import {PAGINATION_QUERY} from '../components/Pagination';

export default function paginationField() {
    return {
        keyArgs: false, //tells Apollo we will deal with this
        read(existing =[], { args, cache }) {
            //Apollo asks read function for allProducts
            // console.log({existing, args, cache});
            const { skip, first } = args;
            //read # of items on page from cache
            const data = cache.readQuery({ query: PAGINATION_QUERY });
            const count = data?._allProductsMeta?.count;
            const page = skip / first + 1;
            const pages = Math.ceil(count / first);
            // check if there are existing items in cache, and filter out undefined items
            const items = existing.slice(skip, skip + first).filter((x) => x);
            //if there are items, but not as many as the `first` value, and we are on the last page, send partial page anyway  
            if(items.length && items.length !== first && page === pages) {
                return items;
            }
            //if no items...
            if(items.length !== first) {
                // tell Apollo we have nuthin and to fetch items from network
                return false;
            };
            //if there are items in cache, skip the network request and return from cache
            if(items.length) {
                console.log(`the cache already has ${items.length} items`);
                return items;  
            };
            // if both IFs don't work... fall back to network request
            return false;
            

            //we can do 1 of 2 things...
            // 1. return the items that are already in cache
            // or 2. return 'false' triggering a network request for the items
        },
        merge(existing, incoming, {args}) {
            //grab skip and first values
            const { skip, first } = args;
            // this runs when Apollo brings data back from the network request
            console.log(`merging items from network ${incoming.length}`);
            // console.log({incoming});
            //if anything in the cache, merged is the existing, otherwise it's an empty array
            const merged = existing ? existing.slice(0) : [];
            //leave room for previous items, in case we are linked to a later page and the previous entries aren't in the cache
            for (let i = skip; i <  skip + incoming.length; ++i) {
                merged[i] = incoming [i - skip]
            };
            // console.log({merged});
            //return merged itemd from cache, which automatically refires read fucntion
            return merged;
            
            
        }
    };
};