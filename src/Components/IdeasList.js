import React, {Component} from 'react'
import Idea from './Idea'
//import data from '../data/data'
import MdAdd from 'react-icons/lib/md/add'


class booksSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksSeries: [
      ]
    }
    this.eachIdea   = this.eachIdea.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.add        = this.add.bind(this);
    this.nextID     = this.nextID.bind(this);
  }

  add(txt,aut,gnr,rey,filmed,books) {
    this.setState(prevState => ({
      booksSeries: [
      ...prevState.booksSeries,
      {
          id: this.nextID(),
          seriesName: txt,
          author:aut,
          genre:gnr, 
          releaseYear:rey,
          filmed:filmed,
          books:books

      }]
    }))
  }
  nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }

  /*
  componentWillMount() {
      var self=this
      data.map((idea) => {
          self.add(idea.idea, idea.group)
      })
  }
*/

componentDidMount() {
  const url ="https://books-series.herokuapp.com/allSerieses/db_usr";
  fetch(url)
  .then((res) => {
  return res.json();
  })
  .then((data) => {
  var self=this;
  data.map((data) => {
  console.log(data.filmed)
  self.add(data.seriesName, data.author,data.genre,data.releaseYear,data.filmed,data.books);
  })
  })
  }

  update(newIdea, i) {
    this.setState(() => ({
      booksSeries: this.state.booksSeries.map(
        (booksSeries) => (booksSeries.id !== i) ? booksSeries : {...booksSeries, booksSeries: newIdea}
      )
      }))
  }    

  delete(id) {

      //finish yourself- this should be called by onDelete

  }

  eachIdea (booksSeries,i) {
    return (          
      <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
          <Idea key={'booksSeries'+i} index={i} onChange={this.update}>
             <h3 >seriesName: </h3> 
            <h4 className="card-title"> { booksSeries.seriesName}</h4>
            <h5>author: </h5>
            <h6 className="card-text">{booksSeries.author} </h6>
            <h5>genre: </h5>
            <h6 className="card-text">{booksSeries.genre.map((name,key)=>{
return <div key={key}>{name} </div>
            })}</h6>
            <h5>books: </h5>
             <h6 className="card-text">{booksSeries.books.map((obj,key)=>{
              return <div key={key}><div>{obj.bookName}</div><div>{obj.releaseYear}</div></div>
            })}</h6>
            <h5>filmed: </h5>
             <h6 className="card-text">{booksSeries.filmed.toString()}</h6>
             <h5>releaseYear: </h5>
            <h6 className="card-text">{booksSeries.releaseYear}</h6>
            
          </Idea>
        </div>
      </div>
      )
  }

  render() {
      return (
        <div className="ideaList">
          {this.state.booksSeries.map(this.eachIdea)}
          <button id="add" className="btn btn-primary" style={{marginTop:7+'px'}}>
             <MdAdd/></button>
        </div>
      )
  }
}
export default booksSeries
