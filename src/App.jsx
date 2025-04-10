import { Provider } from "react-redux"
import Body from "./components/Body"
import Appstore from "./utils/store/Appstore"


function App() {

  return (
    <>
     <Provider store={Appstore}>
      <Body></Body>
    
      </Provider>
     
    </>
  )
}

export default App
