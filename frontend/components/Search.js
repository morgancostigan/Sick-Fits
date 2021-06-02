import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
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
    resetIdCounter();
    const { getMenuProps, getInputProps, getComboboxProps } = useCombobox({
        items: [],
        onInputValueChange(){
            console.log('Chngd');
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
                <DropDownItem>Hey</DropDownItem>
            </DropDown>
        </SearchStyles>
    );
};