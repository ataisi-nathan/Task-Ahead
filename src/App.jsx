import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/home";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import Shop from "./routes/shop";
import PageNotFound from "./routes/pageNotFound";
import TaskAheadApp from "./projects/TaskAhead/app";
import SkillShow from "./projects/SkillShow/app";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/projects/taskahead" element={<TaskAheadApp />} />
        <Route path="/projects/skillshow" element={<SkillShow />} />
      </Routes>
    </>
  );

}

export default App;