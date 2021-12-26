import React,{useState,useEffect} from 'react'
import { Accordion } from 'react-bootstrap'
import './view.css'
import axios from 'axios';
import {IoMdArrowDropdown} from 'react-icons/io'
import styled from "styled-components";

const Toggle = styled.button`
width: 90px;
height: 50px;
position: relative;
cursor: pointer;
border-radius: 25px;
outline: none;
background-color: ${props => (props.on ? "#4cd137" : "#353b48")};
border: 3px solid white;

&::after {
  content: "";
  position: absolute;
  top: 3.5px;
  will-change: transform;
  transform: translate(${props => (props.on ? 5.5 : -44)}px);
  transition: transform 0.2s ease-out;
  width: 35px;
  height: 35px;
  background: white;
  border: 2px solid #7f8fa6;
  outline: none;
  border-radius: 50%;
}
`;


const View = () => {
    const [Data,setData] = useState([]);
    const [on, toggle] = useState(false);
   // const [on, toggle] = useState(false);

const [show,setshow]  =useState(true)
   

    const newData = async () =>{
        const response =await axios.get("https://619b61042782760017445573.mockapi.io/api/v1/getBanner/1")
       console.log(response.data)
        setData(response.data.accordian)
    
       console.log(response.data.accordian)

    }
    
    const handleClick=() =>{
      setshow(!show)
    }
    useEffect(()=>{
      newData();
    },[])
    return (
        <div className="modal-wrapper col-md-12">
      <div className="modal-header">
          <h3 className="mx-3">Can we Store Cookies?</h3>
          <span className="close-modal-btn">X</span>
      </div>
      <div className="card">
  <div className="card-body m-3">
    <h5 class="card-title"></h5>
    <p className="card-text">We and our partners use technologies,such as cookies and process personal data.when such as IP addresss and cokkie identifies,to ads and content based on your interests,measure the performance of ads and conetetnt and derives insights about the audience who save and content.</p>
    <p className="card-text">Click below to content to the use of this technology and the processsing of your personal data for these purpose.you can chane your mind and change your consent choices at any time by returning to this site.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p>You can familiarize with our<a href="" class="text-dark"> <b>Privacy Policy</b></a></p>
  </div>
  <div>
  <div className="btn-toolbar" className="mx-2 mb-4" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mx-3 d-flex" role="group" aria-label="First group">
    <button type="button" id="btn-1" className="mx-2 px-5 rounded">Accept All</button>
    <button type="button" className="btn btn-light border mx-5 px-5 rounded">Save Settings</button> <span className="text-right" >Customize <IoMdArrowDropdown  onClick={handleClick}/> </span>
  </div>
  </div>
</div>
</div>

{
show ? (

  <div className="accordian ">
  {
   Data.map((e,index)=>{
     return (
         <div key={index}>
       <Accordion className="mb-3">
       <Accordion.Item   eventKey="0">
       <Accordion.Header> <Toggle on={on} onClick={() => toggle(!on)}/>{e.CategoyHeading}</Accordion.Header>
         <Accordion.Body>
          {e.CategoyText}
          <div className="d-flex mx-4">
                  <h6>Plugins</h6>
              <h6 className="mx-5 px-5">Block/Enable</h6>
              
          </div>
           <div className="d-flex mx-4">
               <p>GoogleAnalytics</p>
               <Toggle on={on}  className="mx-4" onClick={() => toggle(!on)}/>
               <a href="#" className="mx-5 px-5">Go to Site</a>
          </div> 
          <div className="d-flex mx-4">
               <p className="mx-4">HotJar</p>
               <Toggle className="mx-5" on={on} onClick={() => toggle(!on)}/>
               <a href="#" className="mx-5 px-">Go to Site</a>
          </div> 
           
         </Accordion.Body>
       </Accordion.Item>
     </Accordion>
     </div>
     )
 })}   


</div>


) : ""
}

  </div>
        
    )
}

export default View
