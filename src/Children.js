import React, { Component } from 'react'

class Children extends Component{
    render(){
        var listChild = this.props.children.map((data, index) =>
            <div key={index}>
                <label onClick={ () => { this.props.deleteChild(index) } }>(-) Child Name: </label>
                <input type="text" defaultValue={data} onChange={ (e) => { this.props.changeChild(e, index) } }/>
            </div>
        )
        return (
            <div>
                { listChild }
            </div>
        )
    }
}

export default Children