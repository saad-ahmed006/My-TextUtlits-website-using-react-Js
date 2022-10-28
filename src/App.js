import './App.css';
import { useState } from 'react';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Textform from './Component/Textform';
import Alert from './Component/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const Toglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      settext("Enable White Mode")
      showAlert("Success: Dark Mode has been enabled","success")
  
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      settext("Enable Dark Mode")      
      showAlert("Success: White Mode has been enabled","success")
    }  
  }
  const [text, settext] = useState('Enable Dark Mode');

  // const [yellowmodetext, setyellowmodetext] = useState('Enable yellow Mode');
  // const [modeyellow, setyellowmode] = useState('light');
  // const Toglemodeabc = () => {
  //   if (modeyellow === 'light') {
  //     setyellowmode('dark')
  //     document.body.style.backgroundColor = '		#800080'
  //     setyellowmodetext("Enable White Mode")
  
  //   }
  //   else {
  //     setyellowmode('light')
  //     document.body.style.backgroundColor = 'white'
  //     setyellowmodetext("Enable yellow Mode")      
  //   }  
  // }


  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
         setAlert({   message:message,
                      type:type
          })
          setTimeout(() => {
            setAlert(null)
          }, 15000);
  }


  return (
    <>
        <Navbar title="My TextUtlits"   home="Home" about="About" services="Services" blog="Blog" contact="Contact to me" mode={mode} text={text}    togglemode={Toglemode}    /> 
        <Alert alert={alert}/>
       
      <div className="container">

          < Textform heading="First Button click to UpperCase and second Button click to lowerCase" mode={mode} showAlert={showAlert}   />
            <About mode={mode} />
      </div>


    </>
    
  );
}

export default App;


// Toglemodeabc={Toglemodeabc}
// modeyellow={modeyellow}
// yellowmodetext={yellowmodetext}
// modeyellow={modeyellow}