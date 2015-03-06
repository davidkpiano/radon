var React = require('react');

class RadonStyleSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'div { background: green; }'
        };
    }

    render() {
        return (
            <style>{this.state.style}</style>
        );
    }
}

React.render(<RadonStyleSheet/>, document.getElementById('style'));

module.exports = RadonStyleSheet;