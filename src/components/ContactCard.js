import React from 'react'
import icons8 from '../images/icons8.png'; 

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
  return (
            <div className='item' 
                    style={{display:"flex", 
                    padding:"8px", 
                }}>

                <img className='ui avatar image' 
                    src={icons8} alt="icons" 
                    styles={{width:"3em", height:"3em"}}/>
                    
                <div className='content' style={{width:'300px'}}>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
                {/* <div  style={{float: "right"}}> */}
                <i className='trash alternate outline icon' 
                    style={{fontSize:"1.5em",
                    color: "red", 
                    marginTop: "7px" 
                    /*marginLeft: "140px"*/
                 }} onClick={() => props.clickHandler(id)}></i>
                {/* </div> */}
            </div>
        );
    
}

export default ContactCard;
