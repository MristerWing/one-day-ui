import './App.css';
import { useCallback, useState } from 'react';

const list = new Array(5).fill(0).map((_, index) => ({
	title: `item${index}`,
	content: `content${index}`,
}));

function App() {
	const [openList, setOpenList] = useState(list.map((_) => false));

	const onOpenHandler = useCallback(
		(index) => {
			setOpenList(
				openList.map((value, i) => (index === i ? !value : value))
			);
		},
		[openList]
	);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Accordion</h1>
			</header>

			<main>
				{list.map((item, index) => (
					<div
						className={`container${openList[index] ? ' open' : ''}`}
						key={`accordion${index}`}
						onClick={(e) => {
							e.preventDefault();
							onOpenHandler(index);
						}}
					>
						<div className="title-grid">
							<span className="title">{item.title}</span>
							<span className="title">
								{openList[index] ? '☑️' : '✔️'}
							</span>
						</div>

						{openList[index] && (
							<>
								<div className="content">{item.content}</div>
								<div className="content">{item.content}</div>
								<div className="content">{item.content}</div>
								<div className="content">{item.content}</div>
							</>
						)}
					</div>
				))}
			</main>
		</div>
	);
}

export default App;
