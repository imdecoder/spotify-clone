import logo from 'assets/images/logo.svg';

import { Icon } from 'Icons';

import Menu from 'components/Sidebar/Menu';
import Playlists from 'components/Sidebar/Playlists';
import DownloadApp from 'components/Sidebar/DownloadApp';

function Sidebar() {
	return (
		<aside className="flex flex-shrink-0 flex-col w-60 bg-black pt-6">

			<a href="#" className="px-6 mb-7">
				<img src={logo} alt="" className="h-10" />
			</a>

			<Menu />

			<nav className="mt-6">
				<ul>
					<li>
						<a href="#" className="group flex items-center text-link text-sm font-semibold py-2 px-6 hover:text-white">
							<span className="flex justify-center items-center w-6 h-6 bg-white bg-opacity-60 text-black rounded-sm mr-4 group-hover:bg-opacity-100">
								<Icon name="plus" size={12} />
							</span>
							Çalma Listesi Oluştur
						</a>
					</li>
					<li>
						<a href="#" className="group flex items-center text-link text-sm font-semibold py-2 px-6 hover:text-white">
							<span className="flex justify-center items-center w-6 h-6 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm opacity-70 mr-4 group-hover:opacity-100">
								<Icon name="heart" size={12} />
							</span>
							Beğenilen Şarkılar
						</a>
					</li>
				</ul>
			</nav>

			<Playlists />

			<DownloadApp />

		</aside>
	);
}

export default Sidebar;
