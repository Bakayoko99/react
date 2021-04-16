
import React from 'react'
import '../styles/components.css'

class List extends React.Component {

    render() {
        return (
            <div>
                List
                <ul class="list-group col-12 offset-">

                    {this.props.items.map((elem) => {
                        return ( <li class="list-group-item d-flex justify-content-between align-items-center">
                            {elem.name}
                            <span class="badge bg-primary rounded-pill" id="priceSpan">{elem.price}</span>
                        </li>)
                    })}

                </ul>
            </div>
        )
    }
}

export default List