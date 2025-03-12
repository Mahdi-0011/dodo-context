{/*import "./App.scss";
<<<<<<< HEAD
import AddCount from "./components/AddCount/AddCount";
import CollatzConjecture from "./components/CollatzConjecture/CollatzConjecture";
import NoContext from "./components/NoContext/NoContext";
import ShowCount from "./components/ShowCount/ShowCount";
import { AnotherCountContextProvider } from "./contexts/AnotherCountContext";

function App() {
	return (
		<AnotherCountContextProvider>
			<h1>dodo-context</h1>
			<p>a context demo</p>
			<AddCount />
			<ShowCount />
			<NoContext />
			<CollatzConjecture />
		</AnotherCountContextProvider>
*/}
import Counter from "./components/Counter/Counter";
import { CountReducerContextProvider } from "./contexts/CountReducerContext";

function App() {
	return (
		<CountReducerContextProvider>
			<h1>🦤 dodo-context 🦤</h1>
			<p>a context demo</p>
			<Counter />
		</CountReducerContextProvider>
	);
}

export default App;
