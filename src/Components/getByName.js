import React, {Component} from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdEdit from 'react-icons/lib/md/edit'
import MdSave from 'react-icons/lib/md/save'


class getByName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing:true

    }
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderUI   = this.renderUI.bind(this);
    this.createGist = this.createGist.bind(this);

   
  }
  
  

componentDidMount(){
this.fetchData();

}

fetchData(){

  (async () => {
    const rawResponse = await fetch('https://books-series.herokuapp.com/seriesByName/db_usr', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();
  /*
  fetch('https://books-series.herokuapp.com/seriesByName/db_usr')
  .then(response =>response.json())
  .then(parsedJSON => parsedJSON.results.map(seriesName=>({

  })))
  .catch(error => console.log('parsing failed',error))
*/
}

    createGist(opts) {

    fetch('https://books-series.herokuapp.com/seriesByName/db_usr', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(function(response) {
      return response;
    }).catch(function(err) {
      return err;
    });
   }


  edit () {
    this.setState({
      editing:true
    });
  }
  delete() {
    alert('you can do the delete on your own')
  }

  

  save(e) {
    e.preventDefault();

    const series = {
        seriesName: this.state.seriesName
    };
 
   const data = this.props.createGist(series);

    //this.props.onChange(this.newIdea.value,this.props.index);
   // this.setState({
      editing:false
   // })
  }

  componentWillReceiveProps(newProps){

  }
  onSubmit(e) {
    e.preventDefault();

    const series = {
        seriesName: this.state.seriesName
    };

   let data = this.props.createGist(series);
   console.log(data);
  }

  renderForm() {
    return (
       <div>
        <form  action="https://books-series.herokuapp.com/seriesByName/db_usr"  method="POST">
          <textarea ref={
            (input) => {
              this.newIdea=input;
            }
          }/>
          <button className="btn" type="submit"  > submit</button>
        </form>
      </div>
    )
  }

  renderUI() {
    return (
      <div className='idea'>
          <div>{this.props.children}</div>
          <span>
            <button className="btn btn-primary" style={{marginRight:7+'px'}} onClick={this.edit}><MdEdit/></button>
            <button className="btn btn-primary" onClick={this.delete}><MdDelete/></button>
          </span>
        </div>
    );
  }


  render() {
      return (
        this.state.editing ? this.renderForm() : this.renderUI()
      )
  }
}
export default getByName