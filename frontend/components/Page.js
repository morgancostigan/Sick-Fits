import PropTypes from 'prop-types';

export default function Page({children}) {
    return <div>
        <h2>Ich bin ein seite</h2>
        {children}
    </div>
}

Page.propTypes = {
    children: PropTypes.any,
}