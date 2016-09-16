/**
 * @author CaiXi on 2016/9/16.
 * @description
 */
import React from 'react-native';
const {
    Component
    } = React;
import {connect} from 'react-redux';

import About from '../pages/About';

class AboutContainer extends Component {
    render () {
        return (
            <About {...this.props} />
        );
    }
}

function mapStateToProps (state) {
    const {reddit} = state;
    return {
        reddit
    }
}

export default connect(mapStateToProps)(AboutContainer);