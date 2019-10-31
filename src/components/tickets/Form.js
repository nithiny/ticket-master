import React,  {Component} from 'react'
import axios from '../../config/axios'

export default class TicketsForm  extends React.Component {
           
       constructor (){
           super()
           this.state ={
               code :'',
               customer :'',
               message :'',
               priority :'',
               employee :''
           }
       }

       render(){
             return(
                 <div>
                    <b> Add Tickets </b>

                     <form>
                         <label>
                            Code
                             <input type ="text" value ={this.state.code} onChange={this.handlechange} />
                         </label>
                         <br/>
                        

                         <label>
                             customer
                             
                         </label>
                         
                          
                        <label>
                             message
                        </label>
                           

                        <label> 
                            priority
                        </label>
                        


                        <label>
                            employee
                        </label>
                        


                     </form>

                 </div>
             )
         }
} 