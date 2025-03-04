import {Component} from "react"
import './App.css';
import Country from "./Component/Country"
import Navbar from "./Component/Navbar"

class App extends Component{
  state={placelist:[] ,countryname:""}
  updateshowstate=(id)=>{
    const {placelist}= this.state
    const updatedlist = placelist.map(eachitem=>{
      if(eachitem.id=== id){
        return{...eachitem , showstate:!eachitem.showstate}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({
      placelist: updatedlist
    })
  }
  updateshowcity=(id ,stateid)=>{
    const {placelist}= this.state
    const newlist = placelist.find(eachitem => eachitem.id === id)
    const {statelist}= newlist
    const findstate = statelist.find(eachitem => eachitem.stateid === stateid)
    findstate.showcity = !findstate.showcity
    
    const updatedcountrylist = placelist.map(eachitem =>{
      if(eachitem.id=== id){
        return{...newlist}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({placelist: updatedcountrylist})
  }
  addcountry=()=>{
    const {placelist ,countryname}= this.state
    if(countryname!==""){
      const newcountry = {
        id:placelist.length+1,
        contry:countryname,
        showstate:false,
        statelist:[]
      }
      const updatedlist = [...placelist,newcountry]
      this.setState({placelist: updatedlist ,countryname:""})
    }
  }
  addcountryname=(event)=>{
    event.preventDefault()
    this.setState({countryname: event.target.value})
  }
  addstatename=(id,statename)=>{
    if(statename!==""){
      const {placelist}= this.state
      const newlist = placelist.find(eachitem => eachitem.id === id)
      const {statelist}= newlist
      const newstate={
        stateid:statelist.length+1,
        name:statename,
        citeslist:[],
        showcity:false,
      }
      const updatedlist = placelist.map(eachitem=>{
        if(eachitem.id=== id){
          return{...eachitem , statelist:[...eachitem.statelist,newstate]}
        }
        else{
          return {...eachitem}
        }
      })
      this.setState({
        placelist: updatedlist
      })
    }
  }
  addcityname=(id,stateid,cityname)=>{
    if(cityname !==""){
      const {placelist}= this.state
      const newlist = placelist.find(eachitem => eachitem.id === id)
      const {statelist}= newlist
      const findstate = statelist.find(eachitem => eachitem.stateid === stateid)
      const {citeslist}= findstate
      const newcity={
        cityid:citeslist.length+1,
        name:cityname
      }
      findstate.citeslist = [...findstate.citeslist ,newcity]
      
      const updatedcountrylist = placelist.map(eachitem =>{
        if(eachitem.id=== id){
          return{...newlist}
        }
        else{
          return {...eachitem}
        }
      })
      this.setState({placelist: updatedcountrylist})
      }
  }
  deletecountry=(id)=>{
    const {placelist}= this.state
    const updatedlist = placelist.filter(eachitem =>eachitem.id!== id)
    this.setState({
      placelist: updatedlist
    })
  }
  deletestate=(id ,stateid)=>{
    const {placelist}= this.state
    const newlist = placelist.find(eachitem => eachitem.id === id)
    const {statelist}= newlist
    const filteredlist = statelist.filter(eachitem => eachitem.stateid !== stateid)
    newlist.statelist = filteredlist
    
    const updatedcountrylist = placelist.map(eachitem =>{
      if(eachitem.id=== id){
        return{...newlist}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({placelist: updatedcountrylist})
  }
  deletecity=(id,stateid ,cityid)=>{
    const {placelist}= this.state
    const newlist = placelist.find(eachitem => eachitem.id === id)
    const {statelist}= newlist
    const findstate = statelist.find(eachitem => eachitem.stateid === stateid)
    const {citeslist} = findstate
    const filtercitylist =citeslist.filter(eachitem=> eachitem.cityid !== cityid)
    findstate.citeslist = filtercitylist
    
    const updatedcountrylist = placelist.map(eachitem =>{
      if(eachitem.id=== id){
        return{...newlist}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({placelist: updatedcountrylist})
  }
  editcountry=(id)=>{
    const {placelist}= this.state
    const updatedlist = placelist.map(eachitem=>{
      if(eachitem.id=== id){
        return{...eachitem , edit:!eachitem.edit}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({
      placelist: updatedlist
    })
  }
  editstate=(id ,stateid)=>{
    const {placelist}= this.state
    const newlist = placelist.find(eachitem => eachitem.id === id)
    const {statelist}= newlist
    const findstate = statelist.find(eachitem => eachitem.stateid === stateid)
    findstate.edit= !findstate.edit
    
    const updatedcountrylist = placelist.map(eachitem =>{
      if(eachitem.id=== id){
        return{...newlist}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({placelist: updatedcountrylist})
  }
  editcity=(id ,stateid ,cityid)=>{
    const {placelist}= this.state
    const newlist = placelist.find(eachitem => eachitem.id === id)
    const {statelist}= newlist
    const findstate = statelist.find(eachitem => eachitem.stateid === stateid)
    const {citeslist}= findstate
    const findcity = citeslist.find(eachitem => eachitem.cityid === cityid)
    findcity.edit = !findcity.edit
    
    const updatedcountrylist = placelist.map(eachitem =>{
      if(eachitem.id=== id){
        return{...newlist}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({placelist: updatedcountrylist})
  }
  savecountry=(id,updatecountry)=>{
    const {placelist}= this.state
    const updatedlist = placelist.map(eachitem=>{
      if(eachitem.id=== id){
        return{...eachitem , contry:updatecountry ,edit:!eachitem.edit}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({placelist: [...updatedlist]})
  }
  savestate=(id,stateid,updatedstate)=>{
    const {placelist}= this.state
    const newlist = placelist.find(eachitem => eachitem.id === id)
    const {statelist}= newlist
    const findstate = statelist.find(eachitem => eachitem.stateid === stateid)
    findstate.name = updatedstate
    findstate.edit = !findstate.edit
    const updatedcountrylist = placelist.map(eachitem =>{
      if(eachitem.id=== id){
        return{...newlist}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({placelist: [...updatedcountrylist]})
  }
  savecity=(id,stateid,cityid,updatedcity)=>{
    const {placelist}= this.state
    const newlist = placelist.find(eachitem => eachitem.id === id)
    const {statelist}= newlist
    const findstate = statelist.find(eachitem => eachitem.stateid === stateid)
    const {citeslist}= findstate
    const findcity = citeslist.find(eachitem => eachitem.cityid === cityid)
    findcity.edit = !findcity.edit
    findcity.name = updatedcity
    const updatedcountrylist = placelist.map(eachitem =>{
      if(eachitem.id=== id){
        return{...newlist}
      }
      else{
        return {...eachitem}
      }
    })
    this.setState({placelist: updatedcountrylist})
  }
  render(){
    const {placelist ,countryname}= this.state
    console.log(placelist)
    return (
      <div className="bgcontainer">
        <Navbar />
        <div className="maincontainer">
          <div className="addcountrycontainer">
            <input type="text" className="countryinput" value={countryname} onChange={this.addcountryname}/>
            <button className="addcountrybutton" onClick={this.addcountry}>Add Country</button>
          </div>
          <ul>
            {placelist.map(eachitem => <Country key={eachitem.id} contrydetails={eachitem} updateshowstate={this.updateshowstate} updateshowcity={this.updateshowcity} addstatename={this.addstatename}
            addcityname={this.addcityname}
            deletecountry={this.deletecountry}
            deletestate={this.deletestate}
            deletecity={this.deletecity}
            editcountry={this.editcountry}
            savecountry={this.savecountry}
            editstate={this.editstate}
            savestate={this.savestate}
            editcity={this.editcity}
            savecity={this.savecity}/>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
