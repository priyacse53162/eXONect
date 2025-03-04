import {Component} from "react"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { MdOutlineDataSaverOn } from "react-icons/md"
import "./index.css"

class City extends Component{
    state={editcity:""}
    componentDidMount(){
        this.getcityname()
    }
    getcityname=()=>{
        const {citydetails}= this.props
        const {name} = citydetails
        this.setState({editcity:name})
    }
    updateeditcity=(event)=>{
        event.preventDefault()
        this.setState({editcity: event.target.value})
    }
    sendcityid=()=>{
        alert("Item has been Deleted")
        const {citydetails ,passdeletecityid}= this.props
        const {cityid} = citydetails
        passdeletecityid(cityid)
    }
    editcitystatus=()=>{
        const {citydetails ,updateeditcity}= this.props
        const {cityid} = citydetails
        updateeditcity(cityid)
    }
    saveupdaedcity=()=>{
        alert("Item has been Edited")
        const {citydetails ,sendsavecity}= this.props
        const {cityid} = citydetails
        const {editcity}= this.state
        sendsavecity(cityid ,editcity)
    }
    render(){
        const {editcity}= this.state
        const {citydetails}= this.props
        const {edit,name} = citydetails
        return(
            <div className="citycontainer">
                {edit ? <input type="text" value={editcity} onChange={this.updateeditcity} className="updateinputbox"/>
                :<h1 className="cityename">{name}</h1>
                }
                <div classNmae="buttoncontainer">
                    {edit ?<button className="editbutton savebuttton" onClick={this.saveupdaedcity}><MdOutlineDataSaverOn /></button> : <button onClick={this.editcitystatus} className="editbutton"><FaEdit /></button>}
                    <button className="editbutton" onClick={this.sendcityid}><MdDelete /></button>
                </div>
            </div>
            
        )
    }
}
export default City