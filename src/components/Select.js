import React from 'react'
import getData from "../hooks/useData"


export default class Select  extends React.Component{
  constructor(){
    super()
    this.state = {
      issue: {},
    }
    this.onChange = this.onChange.bind(this)
    this.handleSummit = this.handleSummit.bind(this)
  }

  componentDidMount(){
    this.loadData()
  }

  componentDidUpdate(){
      this.loadData()
  }

  onChange(event){
    const {name, value} = event.target
    this.setState(prevState => ({
      issue: {...prevState.issue,[name]: value}
    }))
  }

  handleSummit(e){
    e.preventDefualt()
    const { issue } = this.state
    console.log(issue)
  }

  async loadData(){
    
    try {
      const data = await getData()
      if(data){
        const {issue} = data
        issue.due =issue.due ? issue.due.toDateString(): ''
        issue.effort =issue.effort != null ? issue.effort.toString(): ''
        issue.owner =issue.owner != null ? issue.owner: ''
        issue.description =issue.description != null ? issue.description: ''
        this.setState({ issue: {} })
  
      }
    }catch(err){
      console.log(err)
    }
  }

  render(){
    const {issue: {id}} = this.state
    //const {issue: {title, status}} = this.state
    //const {issue: {owner, effort, description}} = this.state
    const {issue: {to, from}} = this.state

    return(
      <div>
        <form>
          <h3>Search local flights</h3>
          <table>
            <tbody>
              <tr>
                <td>From: <input name='from' value={from} onChange={this.onChange}/></td>
                <td>To: <input name='to' value={to} onChange={this.onChange}/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
   }
}