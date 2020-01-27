import React, {Component, Fragment} from 'react';
import './Dashboard.scss';
import {addDataToAPI, getDataFromAPI} from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component{
    state = {
        title: '',
        content: '',
        date: ''
    }

    componentDidMount () {
        const userData = JSON.parse(localStorage.getItem("userData"));
        this.props.getNotes(userData.uid)
    }

    handleSaveNotes = () => {
        const {title, content, date} = this.state;
        const {saveNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem("userData"));
        
        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userID: userData.uid
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
        console.log('notes : ', this.props.notes);
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
                {
                    this.props.notes.length > 0 ? (
                        <Fragment>
                            {
                                this.props.notes.map(note => {
                                    return (
                                        <div className="card-content" key={note.id}>
                                            <p className="title">{note.data.title}</p>
                                            <p className="date">{note.data.date}</p>
                                            <p className="content">{note.data.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </Fragment>
                    ) : null
                }

                
            </div>
            
        )
    }
}

const reduxState = (state) => ({
    userData: state.user,
    notes: state.notes
})

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(addDataToAPI(data)),
    getNotes: (data) => dispatch(getDataFromAPI(data))

})

export default connect(reduxState, reduxDispatch) (Dashboard);