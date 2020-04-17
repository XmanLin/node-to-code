exports.page = function (className) {
    return `
import * as React from 'react';

export class ${className} extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidMount(){

    }

    render() {
        return (
            <div></div>
        )
    }
}
    ` 
}

exports.api = `const API = "localhost://8080/my-api";`

exports.route = `
import * as React from 'react';

export const route = [];
`
