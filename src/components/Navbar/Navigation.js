import { useHistory } from 'react-router-dom';

import { Icon } from 'Icons';

function Navigation() {
	const history = useHistory();

	return (
		<nav className="flex items-center gap-x-4">
			<button
				className="flex justify-center items-center w-8 h-8 bg-black bg-opacity-70 rounded-full"
				onClick={() => history.goBack()}
			>
				<Icon name="prev" size={22} />
			</button>
			<button
				className="flex justify-center items-center w-8 h-8 bg-black bg-opacity-70 rounded-full"
				onClick={() => history.goForward()}
			>
				<Icon name="next" size={22} />
			</button>
		</nav>
	);
}

export default Navigation;
