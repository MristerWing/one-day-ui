import { useCallback } from 'react';
import './App.css';

function App() {
	const onMouseHandler = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			console.log(e);
		},
		[]
	);

	return (
		<div className="App">
			<div onMouseOver={onMouseHandler} className="box" />
		</div>
	);
}

export default App;
