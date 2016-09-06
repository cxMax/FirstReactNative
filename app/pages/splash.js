/**
 * Created by Administrator on 2016/9/7.
 */
const {
    Dimensions,
    Image,
    InteractionManager
    } = React;

import  MainContainer from '../containers/MainContainer';

var {height , width} = Dimensions.get('window');

class Splash extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        const {navigator} = this.props;
        setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: MainContainer,
                    name: 'Main'
                });
            });
        }, 1500);
    }

    render () {
        return (
            <Image
                style={{flex: 1, width: width, height: height}}
                source={require('../img/reddit_splash.png')}
                />
        );
    }
}

export default Splash;