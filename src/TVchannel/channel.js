import React, {Component} from 'react';
import './channel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditItemPopup from '../Popup/EditItem/EditItemPopup'
import { withRouter } from "react-router";
import axios from 'axios'

class Channel extends Component {
    getNewData (search = null) {
        let url = this.props.location.pathname.substring(1)
        let state = this.props._this
        console.log(url)
        let apiUrl = `http://localhost:2000/getValues/?${url}`;
        if(state.state.serchValue){
            apiUrl += `$search=${state.state.serchValue};`

        }
        // apiUrl += `&skip=${this.props.state.channelData.length - 20}`;
        return(axios.get(apiUrl)
        .then(data => {state.setState({channelData: data.data})
            }))
       }

    toggleClass () {
        this.props._this.setState({addClass: !this.props._this.state.addClass});
    }
    componentWillMount(){
        this.getNewData()
    }
    
    componentDidUpdate (prevProps){
        console.log('componentDidUpdate')
        if (this.props.match.path !== prevProps.match.path){
        this.getNewData()
            }
        }

    selectItem(el){
        el.CHECKED = !el.CHECKED;
        this.props._this.setState({trashActive: !!this.props._this.state.channelData.find(e => !!e.CHECKED)})
        // this.props._this.setState({selectedValues: this.props._this.state.channelData.filter(e => !!e.CHECKED)})
        this.props._this.state.trashActive = !!this.props._this.state.channelData.find(e => !!e.CHECKED);
    }

    removeChecked(){
        let deleteItem = this.props._this.state.channelData.filter(e => !!e.CHECKED)
            deleteItem.map((e)=>{
                this.props._this.state.delete.body = e
                this.props._this.handleSubmit(this.props._this.state.delete)
                }) 
        }
    render() {
        let state = this.props._this.state
        let channelList = ["channelList"];
        let listClass = ["list"];
        let gridClass = ["grid active"];
          if(state.addClass) {
            channelList.push('line');
            listClass.push('active');
            gridClass = ["grid"];
          }
        return(
            <div className="ItemListing">
                <div>
                    <div onClick={this.toggleClass.bind(this)} className={gridClass.join(' ')}><FontAwesomeIcon icon="th" /></div>
                    <div onClick={this.toggleClass.bind(this)} className={listClass.join(' ')}><FontAwesomeIcon  icon="list" /></div>
                    <div onClick={this.removeChecked.bind(this)} className={state.trashActive? '':'active'}><FontAwesomeIcon  icon="trash" /></div>
                </div>
                <div className={channelList.join(' ')}>
                        {state.channelData.map((element) =>{
                          return(<div className={element.CHECKED ? 'channelItem checked' : 'channelItem'} onClick={this.selectItem.bind(this, element)}>
                                    <div className="edit"><EditItemPopup _this={this.props._this} mapParam = {element}/></div>
                                    <img src={(`./img/${element.LOGO}`)} alt={element.NAME}></img>
                                    <div>{element.NAME}</div>
                                </div>)})}
                </div>
            </div>
        )}

}
export default withRouter(Channel)