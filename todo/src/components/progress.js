import React from 'react';
import { useSelector ,useDispatch} from "react-redux";
import { GFG_Fun } from "./view_control";

function Progress() {
    const progress = useSelector((state) => state.addReducer);
    console.log(progress)
    const dispatch = useDispatch();

    let dateCheck = "";
  
    let current_date = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  let currentDate = formatDate(current_date);
  console.log(currentDate);


    return (
        <>
        <div style={{}}>
         
  
          <div className="card-grid-space">
          
            <a className="card " >
            <div className=" scrollable-content" style={{height: "600px",width:'500px',paddingLeft:'0px',paddingRight:'0px',marginRight:'-50px',marginTop:'20px'}}>
              
             <div style={{marginLeft:'30px',width:'25em' }}>
                
                  {progress.value.map((ele) => (
                    <div
                      className="card1 card1-1 scrollable-content"
                      style={{ backgroundImage: GFG_Fun() }}
                    >
                     {/* <div className="">
                      <button value={ele.id}style={{width:"100px",height:"30px",fontSize:"12px"}} onClick={handleTodoProgress}>Progress List +</button>
                      </div>*/}
                      
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
       
    )
}

export default Progress
