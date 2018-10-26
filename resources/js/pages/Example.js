import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  {connect} from 'react-redux'

class Example extends Component {
    render() {
        console.log(this.props.testStore);
        return (
            <div>
                <div className={'container'}>
                    <Link to='/xample'>xsample</Link>
                </div>
                <div>
                    <input className={'trackInput'}/>
                    <button className={'addTrack'}> </button>
                    <ul className={'list'}>
                        {this.props.testStore.map((track, index) =>
                            <li key={index}>{track}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state.playList
    }),
    dispatch => ({})
)(Example)

