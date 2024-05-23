import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import NameList from './component/NameList';
import { useEffect, useState } from 'react';
import NameForm from './component/NameForm';

function App() {
  // var nameArr= ['Manjiri','Sam']
  const [nameArr,setNameArr]=useState(["Manjiri","Girish"])
  const [searchArr,setSearchArr] = useState(["Manjiri","Girish"])
  const [search,setSearch]=useState("")


  // onSearch function 
  const onSearch=(event)=>{
    console.log("Step 1 value of search on chnage ---- ")
    // console.log(event.target.value);
    setSearch(event.target.value)
  }

    // every time the value of search text box gets change - it will call useEffect function for search and it will update serachArr list 
    useEffect(()=>{
      console.log("use Effect search---2 "+search);
      if(search!=""){
          var newArr=nameArr.filter(ob=>ob.includes(search));
          setSearchArr(newArr);
      }else{
          setSearchArr(nameArr);
      }
    },[search])


    // add name in nameArr & serachArr
    const addNameArr=(name)=>{
      setNameArr(name)
      setSearchArr(name)
    }


  return (
    <div style={{marginLeft:20}}>
      <Header></Header>
      {/* Search TextBox  */}
       Search: <input type="text" name="search" id="search"
       value={search}
       onChange={onSearch}
       ></input>

       {/* passing array to NameList Component via props */}
       <NameList narr={searchArr} inAppAdd={addNameArr}></NameList>

      <Footer></Footer>
    </div>
  );
}

export default App;
