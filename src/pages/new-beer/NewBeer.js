import React from 'react';
import { Input } from 'antd';
import { InputNumber } from 'antd';
import { Button } from 'antd';
import apiService from '../../api/service';
import { Template } from '../../templates';
import { Redirect } from 'react-router-dom';

const { TextArea } = Input;

class NewBeer extends React.Component {
    state = {
        beer: {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewer_tips: "",
            attenuation_level: 0,
            contributed_by: ""
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/beers'} />
        }
        return (
            <Template>
                <Input placeholder="Name" onChange={(e) => this.onChange('name', e)} />
                <Input placeholder="Tagline" onChange={(e) => this.onChange('tagline', e)} />
                <TextArea rows={4} placeholder="Description" onChange={(e) => this.onChange('description', e)} />
                <Input placeholder="First Brewed" onChange={(e) => this.onChange('first_brewed', e)} />
                <TextArea rows={4} placeholder="Brewer Tips" onChange={(e) => this.onChange('brewer_tips', e)} />
                <InputNumber min={0} defaultValue={0} onChange={(value) => this.onChangeInputNumber(value)} />
                <Input placeholder="Contributed By" onChange={(e) => this.onChange('contributed_by', e)} />
                <Button type="primary" onClick={() => this.createBeer()}>Cadastrar</Button>
            </Template>
        );
    }

    onChange(field, event) {
        this.setState({
            beer: {
                ...this.state.beer,
                [field]: event.target.value
            }
        });
    }

    onChangeInputNumber(value) {
        this.setState({
            beer: {
                ...this.state.beer,
                attenuation_level: value
            }
        });
    }

    async createBeer() {
        await apiService.createBeer(this.state.beer);
        this.setState({ redirect: true });
    }
}

export default NewBeer;