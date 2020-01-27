import React, {Component} from 'react';
import './Dashboard.scss';
import {addDataToAPI} from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component{

    handleSaveNotes = () => {
        alert('Klik Simpan')

    }

    render(){
        return(
            <div className="container">
                <div className="input-form">
                    <input placeholder="title" className="input-title" />
                    <textarea placeholder="content" className="input-content" />
                    <button className="save-btn" onClick={this.handleSaveNotes}>Simpan</button>
                </div>
                <hr/>
                <div className="card-content">
                    <p className="title">Title</p>
                    <p className="date">24 Januari 2020</p>
                    <p className="content">Content Notes</p>
                </div>
            </div>
            
        )
    }
}

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(addDataToAPI(data))
})

export default connect(null, reduxDispatch) (Dashboard);