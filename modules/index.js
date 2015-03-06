var React = require('react');
var RadonStyleSheet = exports.RadonStyleSheet = require('./components/RadonStyleSheet.js');
var Radon = require('./core/Radon');

class Foo extends React.Component {
    render() {
        return <div onClick={this._handleOnClick}>{"Click me and I'll turn blue."}</div>;
    }
    _handleOnClick() {
        Radon.style('blue');
    }
}

console.log(React.render(<Foo />, document.getElementById('foo')));
