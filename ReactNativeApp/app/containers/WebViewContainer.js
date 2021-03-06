/**
 * @author CaiXi on 2016/9/16.
 * @description
 */
import React from 'react-native';
import {connect} from 'react-redux';
import Main from '../pages/Main';

class MainContainer extends React.Component {

    render () {
        return (
            <Main {...this.props} />
        );
    }
}

function mapStateToProps (state) {
    const {reddit} = state;
    return {
        reddit
    }
}

export default connect(mapStateToProps)(MainContainer);