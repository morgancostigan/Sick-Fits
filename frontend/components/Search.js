import { DropDownItem, DropDown, SearchStyles } from './styles/DropDown';

export default function Search() {
    return <SearchStyles>
        <div>
            <input type="search"/>
        </div>
        <DropDown>
            <DropDownItem>Hey</DropDownItem>
            <DropDownItem>Yo</DropDownItem>
            <DropDownItem>Sup</DropDownItem>
            <DropDownItem>Kia Ora</DropDownItem>
            <DropDownItem>Que Pasa</DropDownItem>
        </DropDown>
    </SearchStyles>
}