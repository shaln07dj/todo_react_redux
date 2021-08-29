import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addProgressed } from "../slice/progress";
import { GFG_Fun } from "./view_control";

function View() {
  const todos = useSelector((state) => state.addReducer);

 
  
  let dateCheck = "";
  const dispatch = useDispatch();
  let current_date = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    dateCheck = year + month + day;

    return [year, month, day].join("-");
  }

  let currentDate = formatDate(current_date);
  console.log(currentDate);
  const st = currentDate.replace(/-/g, "");
  console.log(st);
  let [todoval, setTodoval] = useState([{
    title: " ",
    summary: "",
    date: "",
    current_date: "",
    id: "fjdfj5",
    dead_line: "",
    total: "",
    
  }]);



  const handleTodoProgress = (event) => {
   
    console.log("Progress Clicked ", todoval);
    todos.value.map((ele)=>{
      let a =ele.title
    
      if(ele.id===event.target.value)
      {
        
        console.log("Its a match adding to progress list....!",ele.title)
        setTodoval({
          ...todoval,
          [ele.title.name]: ele.title.value,
      
        });

        setTodoval({
          ...todoval,
       s:"s"
      
        }
         
           
          
          );
     

      }
    })
    dispatch(addProgressed(todoval));// Adding In Progress Todos In Store
    console.log(event.target.value,"this value,",todoval);
  };


  return (
    <>
      <div style={{}}>
       

        <div className="card-grid-space">
        
          <a className="card " >
          <div className=" scrollable-content" style={{height: "600px",width:'500px',paddingLeft:'0px',paddingRight:'0px',marginRight:'-50px',marginTop:'20px'}}>
            
           <div style={{marginLeft:'30px',width:'25em' }}>
              
                {todos.value.map((ele) => (
                  <div
                    className="card1 card1-1 scrollable-content"
                    style={{ backgroundImage: GFG_Fun() }}
                  >
                    <div className="">
                    <button value={ele.id}style={{width:"100px",height:"30px",fontSize:"12px"}} onClick={handleTodoProgress}>Progress List +</button>
                    </div>
                    {ele.date.replace(/-/g, "") === dateCheck ? (
                      <p style={{ color: "red" }}>Due date is today</p>
                    ) : ele.date.replace(/-/g, "") <= dateCheck ? (
                      <p style={{ color: "red" ,marginBottom:'0px'}}>Due date : {ele.date}<p style={{marginTop:'-10px'}}>Work Work Work..!</p></p>
                    ) : (
                      <p style={{ color: "#195a17" }}>Due date: {ele.date}</p>
                    )}

                    {/*{ (ele.date==ele.current_date) ? <p style={{color:"red"}}>Due date is today</p> : <p style={{color:"green"}}>Due date: {ele.date}</p>}*/}
                    <p className="card1__exit">
                      Dated On: {ele.date}
                    </p>
                    <h2 className="card1__title">{ele.title}</h2>
                    <p className="card1__apply">
                      <a className="card1__link" href="#summary">
                  
                      
                      </a>
                    </p>
                    <p id='#summary'style={{color:"#fff"}}>
                      {ele.summary}
                    </p>
                  </div>
                  
               
               ))}
              </div>

              <div className="date">
                Today<p>{currentDate}</p>
              </div>
              <div className="tags">
                <div className="tag">TODOs</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default View;
