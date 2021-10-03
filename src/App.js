import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/header/header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import React, { useState } from "react";
import axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  // 0 scores by default
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
      setQuestions(data.results);
  };
  

  return (
    <BrowserRouter>
    <div className="app">
      <Header />

      <Switch>
        <Route path='/' exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions}></Home>        </Route>
        <Route path='/quiz' exact>
          <Quiz  
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
          />
        </Route>
        <Route path='/result' exact>
          <Result name={name} score={score} />
        </Route>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
