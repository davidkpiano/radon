var React = require('react');
var RadonStyleSheet = exports.RadonStyleSheet = require('./components/RadonStyleSheet.js');

class Foo extends React.Component {
    render() {
        // var style = Radon.style('hey ya');

        return <div>hello guys</div>;
    }
}

console.log(React.render(<Foo />, document.getElementById('foo')));
