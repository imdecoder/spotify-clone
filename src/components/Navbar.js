import { useRouteMatch } from 'react-router-dom';

import Navigation from 'components/Navbar/Navigation';
import Auth from 'components/Navbar/Auth';

function Navbar() {
	const searchRoute = useRouteMatch('/search');

	return (
		<nav className="flex justify-between items-center h-[3.75rem] px-8">
			<Navigation />

			{searchRoute && (
				<div>
					Arama kısmındasın!
				</div>
			)}

			<Auth />
		</nav>
	);
}

export default Navbar;
