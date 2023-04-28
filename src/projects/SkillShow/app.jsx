import AllRoutes from "./routes/AllRoutes";
import SkillShowHeader from "./components/Header";
import './app.css'

function SkillShow() {
    return (
        <>  
            <main className="skillshow">
                <SkillShowHeader />
                <AllRoutes />

            </main>
        </>
    );
}
export default SkillShow;