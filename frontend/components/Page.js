import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({children}) {
    return (
        <div>
            <Header ></Header>
            <h2>Ich bin ein seite</h2>
            {children}
        </div>
    );
}

Page.propTypes = {
    children: PropTypes.any,
}