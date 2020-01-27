import React, {Component} from 'react';
import './Dashboard.scss';
import {addDataToAPI} from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component{

    state = {
        title: '',
        content: '',
        date: ''
    }

    handleSaveNotes = () => {
        const {title, content, date} = this.state;
        const {saveNotes} = this.props;
        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userID: this.props.userData.uid
        }
        saveNotes(data)
        console.log(data)
    }

    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value,
        })

    }
    
    render(){
        const {title, content, date} = this.state;
        return(
            <div className="container">
                <div className="input-form">
                    <input placeholder="title" className="input-title" onChange={(e) => this.onInputChange(e, "title")} value={title}/>
                    <textarea placeholder="content" className="input-content" onChange={(e) => this.onInputChange(e, "content")} value={content}/>

                    {/* <input placeholder="title" id="title" className="input-title" onChange={this.handleChangeText} value={title}/>
                    <textarea placeholder="content" id="content" className="input-content" onChange={this.handleChangeText} value={content}/> */}
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

const reduxState = (state) => ({
    userData: state.user
})

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState, reduxDispatch) (Dashboard);