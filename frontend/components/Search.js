import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDownItem, DropDown, SearchStyles } from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
    query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
        # renaming results from allProducts to searchTerms
        searchTerms: allProducts(
            where: {
                OR: [
                    { name_contains_i: $searchTerm },
                    { description_contains_i: $searchTerm}
                ]
            }
        ){
            id
            name
            description
            photo {
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

export default function Search() {
    const [findItems, { loading, data, error }] = useLazyQuery(
        SEARCH_PRODUCTS_QUERY,
        {
            //bypass the cache in favor of network searching
            fetchPolicy: 'no-cache',
        });
    const items = data?.searchTerms || []; 
        
    //this is a debounced function that only fires periodically
    const findItemsButChill = debounce(findItems, 350)
    resetIdCounter();
    const { inputValue, getMenuProps, getInputProps, getComboboxProps } =  useCombobox({
        items: [],
        onInputValueChange(){
            console.log('Chngd');
            findItemsButChill({
                variables: {
                     searchTerm: inputValue,
                }
            });
        },
        onSelectedItemChange(){
            console.log('Slctd itm chngd');
            
        } 
    });
    
    return (
        <SearchStyles>
            <div {...getComboboxProps()}>
                <input {...getInputProps({
                    type: 'search',
                    placeholder: 'Search for an item.',
                    id: 'search',
                    className: 'loading',
                })} />
            </div>
            <DropDown {...getMenuProps()}>
                {items.map(item => <DropDownItem>{item.name}</DropDownItem>)}
            </DropDown>
        </SearchStyles>
    );
};