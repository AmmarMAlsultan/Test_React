import {useState,useEffect} from 'react';
import ShowApi from './ShowApi';

const Form = () => {
    const [data, setdata]=useState([]);
    // console.log(data);
    const showdata=data.map((item)=><ShowApi name={item}/>)
    // useEffect(()=>{
    //     // fetch("https://api.imgflip.com/get_memes")
    //     .then((rec)=>rec.json())
    //     .then((data)=> setdata(data.data.memes.map(el=>el.name)))

    // })
    const [firstname,setfirstname]=useState("");
    const [secundname,setsecundname]=useState("");
    const [email,setemail]=useState("");
    // console.log(firstname + secundname + email);
    return (
        <div style={{marginTop:"10px"}}>
            <form action="" method=''>
                <label htmlFor="1" style={{color:"cyan"}}>First Name </label> 
                <input type="text" name="" id="1" value={firstname} onChange={(e)=>setfirstname(e.target.value)} placeholder='First Name' required/>
                <label htmlFor="2" style={{color:"cyan"}}> Secund Name </label>
                <input type="text" name="" id="2" value={secundname} onChange={(e)=>setsecundname(e.target.value)} placeholder='Secund Name' required/>
                <label htmlFor="3" style={{color:"cyan"}}> Email </label>
                <input type="email" name="" id="3" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' required/>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <h3 style={{color:"#fff", marginLeft:"10px"}}>Data Api :</h3>
                {showdata}
            </div>
        </div>
    );
}

export default Form;
