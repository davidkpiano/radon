var React = require('react');
var Radon = require('../core/Radon');

class RadonStyleSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'div { background: green; }'
        };
    }

    componentDidMount() {
        Radon.subscribe(this._onUpdate, this);
    }

    _onUpdate(result) {
        this.setState({ style: `div { background: ${result}; }` });
    }

    render() {
        return (
            <style>{this.state.style}</style>
        );
    }
}

React.render(<RadonStyleSheet/>, document.getElementById('style'));

module.exports = RadonStyleSheet;