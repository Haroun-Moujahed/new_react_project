import "./App.css";
import MyForm from "./components/MyForm/MyForm";
import MyImage from "./components/MyImage/MyImage";
import MyVideo from "./components/MyVideo/MyVideo";

function App() {
    return (
        <div className="App">
            <h1>Hello world</h1>
            <MyForm />
            <MyImage />
            <MyVideo />
        </div>
    );
}

export default App;
