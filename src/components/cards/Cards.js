import React, { Component } from 'react'
import './Cards.css'
import MiniCard from './MiniCard'



export class Cards extends Component {
    divStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
        };
    render() {
        return (
                    <div className="main-card" style = {this.divStyle}>
                    <div className="card">
                    <h1 className="html">HTML</h1>
                    <div className="card-body">
                        <h5 className="card-title">The language for building web pages</h5>
                        <div className="btn-group">
                        <a href="/" className="btn btn-primary">Learn HTML</a>
                        <a href="/" className="btn btn-primary">Vedio Tutorial</a>
                        <a href="/" className="btn btn-primary">HTML REFERENCE</a>
                        </div>
                    </div>
                    </div>

                    <div className="card" aria-hidden="true">
                    <div className="card-body">
                        <MiniCard />

                    
                    </div>
                    </div>
                </div>
        )
    }
}

export default Cards
