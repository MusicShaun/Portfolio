import WindowContainer from "./components/WindowContainer";
import React from "react";
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};


function App() {



  return (<>
    <HelmetProvider context={helmetContext}>  
      <WindowContainer> 

      </WindowContainer>
    </HelmetProvider>
  </>
    
  );
}


export default App;





