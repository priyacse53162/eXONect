import {Component} from "react"
import  City from "../City"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { MdOutlineDataSaverOn } from "react-icons/md"
import "./index.css"

class State extends Component{
    state={cityname:"" ,editstate:""}
    componentDidMount(){
        this.getstatename()
    }
    getstatename=()=>{
        const {statedetails}= this.props
        const {name} = statedetails
        this.setState({editstate:name})
    }
    updatestatename=(event)=>{
        event.preventDefault()
        this.setState({editstate:event.target.value})
    }
    addcityinput=()=>{
        const {cityname}= this.state
        const {statedetails ,passcitydetails}= this.props
        const {stateid} = statedetails
        passcitydetails(stateid ,cityname)
        this.setState({cityname: ""})
    }
    updatecityinput=(event)=>{
        event.preventDefault()
        this.setState({cityname: event.target.value})
    }
    sendcityid=()=>{
        const {statedetails,showcityfun} = this.props
        const {stateid} = statedetails
        showcityfun(stateid)
    }
    senddeleteid=()=>{
        alert("Item has been Deleted")
        const {statedetails,passdeletestate} = this.props
        const {stateid} = statedetails
        passdeletestate(stateid)
    }
    passdeletecityid=(cityid)=>{
        const {statedetails,senddeletecityid} = this.props
        const {stateid} = statedetails
        senddeletecityid(stateid ,cityid)
    }
    changeeditstate=()=>{
        const {statedetails,sendeditstate} = this.props
        const {stateid} = statedetails
        sendeditstate(stateid)
    }
    saveeditstate=()=>{
        alert("Item has been Edited")
        const {statedetails,passupdaedstate} = this.props
        const {stateid} = statedetails
        const {editstate}= this.state
        passupdaedstate(stateid,editstate)
    }
    updateeditcity=(cityid)=>{
        const {statedetails,passuodatecityid} = this.props
        const {stateid} = statedetails
        passuodatecityid(stateid ,cityid)
    }
    sendsavecity=(cityid,updatedcity)=>{
        const {statedetails,passsaveupdaedcity} = this.props
        const {stateid} = statedetails
        passsaveupdaedcity(stateid,cityid,updatedcity)
    }
    render(){
        const {statedetails}= this.props
        const {cityname ,editstate}= this.state
        const {edit,name ,showcity ,citeslist} = statedetails
        return(
            <>
                <div className="statecontainer">
                    {edit ? <input type="text" value={editstate} onChange={this.updatestatename} className="updateinputbox"/>
                        :<h1 className="statename">{name}</h1>
                    }
                    <div className="countrybuttoncontainer">
                        <div classNmae="buttoncontainer">
                            {edit ?<button className="editbutton savebuttton" onClick={this.saveeditstate}><MdOutlineDataSaverOn /></button> : <button className="editbutton" onClick={this.changeeditstate}><FaEdit /></button>}
                            <button className="editbutton" onClick={this.senddeleteid}><MdDelete /></button>
                        </div>
                        <button className="statemenubutton" onClick={this.sendcityid}>{showcity ? '-' : '+'}</button>
                    </div>
                </div>
                {showcity &&
                    <div className="citybgcontainer">
                        <div className="addcitycontainer">
                            <input type="text" className="cityinput" value={cityname} onChange={this.updatecityinput}/>
                            <button className="addcitybutton" onClick={this.addcityinput}>Add City</button>
                        </div>
                        <div className="citylistcontainer">
                            {citeslist.map(eachitem=> <City key={eachitem.cityid} citydetails={eachitem}
                            passdeletecityid={this.passdeletecityid}
                            updateeditcity={this.updateeditcity}
                            sendsavecity={this.sendsavecity}/>)}
                        </div> 
                    </div>
                }
            </>
        )
    }
}
export default State