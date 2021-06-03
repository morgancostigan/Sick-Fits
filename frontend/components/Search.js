import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const [findItems, { loading, data, error }] = useLazyQuery(
        SEARCH_PRODUCTS_QUERY,
        {
            //bypass the cache in favor of network searching
            fetchPolicy: 'no-cache',
        });
    console.log({data});
    
    const items = data?.searchTerms || []; 
        
    //this is a debounced function that only fires periodically
    const findItemsButChill = debounce(findItems, 350)
    resetIdCounter();
    const { 
        inputValue, 
        isOpen,
        getMenuProps, 
        getInputProps, 
        getComboboxProps,
        getItemProps, 
        highlightedIndex,
        selectedItem,
    } =  useCombobox({
        items,
        onInputValueChange(){
            console.log('Chngd');
            findItemsButChill({
                variables: {
                     searchTerm: inputValue,
                }
            });
        },
        onSelectedItemChange({ selectedItem }){
            router.push({
                pathname: `/product/${selectedItem.id}`
            })
            // console.log('Slctd itm chngd');
            // console.log({selectedItem});
                        
        } 
    });
    
    return (
        <SearchStyles>
            <div {...getComboboxProps()}>
                <input {...getInputProps({
                    type: 'search',
                    placeholder: 'Search for an item.',
                    id: 'search',
                    className: loading ? 'loading' : '',
                })} />
            </div>
            <DropDown {...getMenuProps()}>
                {isOpen && items.map((item, index) =>
                    <DropDownItem 
                        key={item.id} 
                        {...getItemProps({item})}
                        highlighted={index === highlightedIndex}
                    >
                    <img 
                        src={item.photo.image.publicUrlTransformed} 
                        alt={item.description}
                        width='50px'
                    />
                    {item.name}
                </DropDownItem>)}
                {isOpen && !items.length && !loading && (
                    <DropDownItem>Oh Snap! No Results For {inputValue}</DropDownItem>
                )}
            </DropDown>
        </SearchStyles>
    );
};