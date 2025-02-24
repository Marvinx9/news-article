import { useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { IUser } from "./Interfaces/IUser";

function App() {
  const [user, setUser] = useState<IUser>()
  const hasUser = Boolean(user)
  return ( 
    <div className="h-screen">
      <Header {...user}/>
      { hasUser && <ArticleList/> }
      { hasUser || <Form onSubmit={setUser}/> }
    </div>
  )
}

export default App;
