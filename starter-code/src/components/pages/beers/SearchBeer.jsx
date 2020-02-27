import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class SearchBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            beersCopy: [],
            search: ''
        }
    }

    handleChanges = e => {
        let value = e.target.value

        let startsWithN = this.state.beersCopy.filter(beer => {
            return beer.name.toLowerCase().includes(value)
        })

        this.setState({
            search: value
        })
        this.props.updateList(startsWithN)
    }

    componentDidMount = () => {
        this.setState({
            beers: this.props.beers,
            beersCopy: this.props.beers
        })
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Search" onChange={this.handleChanges} />
                </Form.Group>
            </Form>
        )
    }
}

export default SearchBeer