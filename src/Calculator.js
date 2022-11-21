import { Component } from "react";

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            percent: 0,
            tip: ''
        };
    }
    handleSubmit = (event) => {
        const {
            amount,
            percent
        } = this.state;
        const result = amount*percent*0.01;
        this.setState({
            tip: `Amount$${amount},Percentage:${percent}%,Tip:${result}$`
        },()=>{
            if(typeof this.props.onChange === 'function') {
                this.props.onChange(this.state.tip);
            }
        });
      
        event.preventDefault();
    }
    updateInputValue = (event) => {
        const {
            key
        } = event.target.dataset;
        this.setState({
            [key]: Number(event.target.value)
        });
    }
    render() {
        const {
            amount,
            percent,
            tip
        } = this.state;
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Amount($)</label>
                <input type="number" data-key="amount" value={amount} onChange={this.updateInputValue}></input>
                <label>Percentage(%)</label>
                <input type="number" data-key="percent" value={percent} onChange={this.updateInputValue}></input>
                <input type="submit" value="Calculate"></input>
            </form>
            {tip?<div>{tip}</div>:null}
            </>
        )
    }

}