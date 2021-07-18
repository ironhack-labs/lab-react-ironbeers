import React, { Component } from 'react'

class Search extends Component {
    render() {
        const {onSearch} = this.props
        return (
            <div>
                <form>
                    <div className="mb-3">
                        <input onChange={onSearch} type="text" className="form-control" placeholder="Search a beer" name="search"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default  Search;