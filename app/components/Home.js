var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1>Github Battle: Battle Your Friends...and Stuff.</h1>

                <Link classname='button' to='/battle'>
                Battle
                </Link>
            </div>
        )
    }
}

module.exports = Home;