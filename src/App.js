import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Content from 'components/Content';
import BottomBar from 'components/BottomBar';

function App() {
	return (
		<Router>
			<div lang="tr" className="wrapper">
				<Sidebar />
				<Content />
			</div>
			<BottomBar />
		</Router>
	);
}

export default App;
