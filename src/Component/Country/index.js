import {Component} from "react"
import  State from "../State"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { MdOutlineDataSaverOn } from "react-icons/md"
import "./index.css"

class Country extends Component{
    state={statename:"" ,editcountry:""}
    componentDidMount(){
        this.getcountry()
    }
    getcountry=()=>{
        const {contrydetails} = this.props
        const {contry} = contrydetails
        this.setState({editcountry:contry})
    }
    sendeditcountryid=()=>{
        const {contrydetails,editcountry} = this.props
        const {id} = contrydetails
        editcountry(id)
    }
    addstateinput=()=>{
        const {statename}= this.state
        const {contrydetails,addstatename} = this.props
        const {id} = contrydetails
        this.setState({statename:""})
        addstatename(id,statename)
    }
    updatestateinput=(event)=>{
        event.preventDefault()
        this.setState({statename: event.target.value})
    }
    showstate=()=>{
        const {contrydetails,updateshowstate} = this.props
        const {id} = contrydetails
        updateshowstate(id)
    }
    showcity=(stateid)=>{
        const {contrydetails ,updateshowcity}= this.props
        const {id} = contrydetails
        updateshowcity(id ,stateid)
    }
    passcitydetails=(stateid ,cityname)=>{
        const {contrydetails ,addcityname}= this.props
        const {id} = contrydetails
        addcityname(id,stateid ,cityname)
    }
    senddeletecountry=()=>{
        alert("Item has been Deleted")
        const {contrydetails ,deletecountry}= this.props
        const {id} = contrydetails
        deletecountry(id)
    }
    passdeletestate=(stateid)=>{
        const {contrydetails ,deletestate}= this.props
        const {id} = contrydetails
        deletestate(id, stateid)
    }
    senddeletecityid=(stateid ,cityid)=>{
        const {contrydetails ,deletecity}= this.props
        const {id} = contrydetails
        deletecity(id,stateid ,cityid)
    }
    updateeditcountry=(event)=>{
        event.preventDefault()
        this.setState({editcountry:event.target.value})
    }
    sendeditcountry=()=>{
        alert("Item has been Edited")
        const {editcountry}= this.state
        const {contrydetails ,savecountry}= this.props
        const {id} = contrydetails
        savecountry(id,editcountry)
    }
    sendeditstate=(stateid)=>{
        const {contrydetails ,editstate}= this.props
        const {id} = contrydetails
        editstate(id,stateid)
    }
    passupdaedstate=(stateid,updatedstate)=>{
        const {contrydetails ,savestate}= this.props
        const {id} = contrydetails
        savestate(id,stateid,updatedstate)
    }
    passuodatecityid=(stateid ,cityid)=>{
        const {contrydetails ,editcity}= this.props
        const {id} = contrydetails
        editcity(id,stateid ,cityid)
    }
    passsaveupdaedcity=(stateid,cityid,updatedcity)=>{
        const {contrydetails ,savecity}= this.props
        const {id} = contrydetails
        savecity(id,stateid,cityid,updatedcity)
    }
    render(){
        const {contrydetails}= this.props
        const {statename ,editcountry}= this.state
        const {edit, contry ,showstate ,statelist} = contrydetails
        return(
            <div className="countrybgcontainer">
                <div className="countrycontainer">
                    {edit ? <input type="text" value={editcountry} onChange={this.updateeditcountry} className="updateinputbox"/>
                    :<h1 className="countryname">{contry}</h1>
                    }
                    <div className="countrybuttoncontainer">
                        <div className="buttoncontainer">
                            {edit ?<button className="editbutton savebuttton" onClick={this.sendeditcountry}><MdOutlineDataSaverOn /></button> : <button className="editbutton" onClick={this.sendeditcountryid}><FaEdit /></button>}
                            <button className="editbutton" onClick={this.senddeletecountry}><MdDelete /></button>
                        </div>
                        <button className="menubutton" onClick={this.showstate}>{showstate ? "-" : "+"}</button>
                    </div>
                </div>
                {showstate &&
                    <>
                        <div className="addstatecontainer">
                            <input type="text" className="stateinput" value={statename} onChange={this.updatestateinput}/>
                            <button className="addstatebutton" onClick={this.addstateinput}>Add State</button>
                        </div>
                        <div className="statelistcontainer">
                            {statelist.map(eachitem=> <State key={eachitem.stateid} statedetails={eachitem} showcityfun={this.showcity} passdeletestate={this.passdeletestate} deletestate={this.deletestate}
                            passcitydetails={this.passcitydetails}
                            senddeletecityid={this.senddeletecityid}
                            sendeditstate={this.sendeditstate}
                            passupdaedstate={this.passupdaedstate}
                            passuodatecityid={this.passuodatecityid}
                            passsaveupdaedcity={this.passsaveupdaedcity}/>)}
                        </div> 
                    </>
                }
            </div>
        )
    }
}
export default Country