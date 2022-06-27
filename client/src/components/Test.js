import React,{useState, useEffect} from "react";
import axios from "axios";
function Test() {

const [user, setUserData] = useState([]);

useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  return (<div>
    {user.map((ele,index)=>(
        <h3 key={index}>
            <h4>{ele['name']}</h4>
        </h3>
    )

    )
}
    
    Test</div>);
}

export default Test;
