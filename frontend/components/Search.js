import { useCombobox } from 'downshift';
import { DropDownItem, DropDown, SearchStyles } from './styles/DropDown';

export default function Search() {
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
            <DropDown>
                <DropDownItem>Hey</DropDownItem>
            </DropDown>
        </SearchStyles>
    );
};