import React,{ Component } from 'react';
import styles from './contacts.scss';
class Contacts extends Component {
   constructor(){
       super()
       this.state = {
           vardas: '',
           pavarde: '',
           elPastas: '',
           zinute: '',
       }
   }
   handleFormSubmit = e => {
       e.preventDefault();
       alert(this.state);
   }
   render(){
       return (
           <section>
               <h2>Kontaktai</h2>
               <form action="#" >
                   <label>Vardas</label>
                   <input type="text" id="fname" name="firstname" placeholder="Vardas"
                          value={this.state.vardas}
                          onChange={e => this.setState({ vardas: e.target.value })}
                   />
                   <label>Pavardė</label>
                   <input type=" text" id="lname" name="pavarde" placeholder="Pavarde"
                          value={this.state.pavarde}
                          onChange={e => this.setState({ pavarde: e.target.value })}
                   />
                   <label>El. paštas</label>
                   <input type="email" id="email" name="elpastas" placeholder="El. paštas"
                          value={this.state.elPastas}
                          onChange={e => this.setState({ elPastas: e.target.value })}
                   />
                   <label>Žinutė</label>
                   <textarea id="message" name="message" placeholder="Jusu zinute.."
                             onChange={e => this.setState({ zinute: e.target.value })}
                             value={this.state.zinute}
                   ></textarea>
                   <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Siųsti" />
               </form >
           </section>
       );
   }
}
export default Contacts;