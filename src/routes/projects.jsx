import { Link } from "react-router-dom";

function Projects() {
    return (
        <main>
            <h2>Project 1: TaskAhead</h2>
            <h3>The project begins here</h3>
            <Link to='./taskahead'>TaskAhead</Link>
            <h2>Project 2: SkillShow</h2>
            <h3>The SkillShow project is just a click away</h3>
            <Link to='./skillshow'>SkillShow</Link>
        </main>
    );
}
export default Projects;