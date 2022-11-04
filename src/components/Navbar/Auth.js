import { Menu } from '@headlessui/react';

import { Icon } from 'Icons';

function Auth() {
	const user = {
		name: 'Wax',
		avatar: 'https://i.scdn.co/image/ab6775700000ee85916e9ed92cf0c7314b40f784'
	};

	return (
		<Menu as="nav" className="relative">
			{({ open }) => (
				<>
					<Menu.Button
						className={`flex items-center h-8 ${open ? 'bg-active' : 'bg-black'} rounded-3xl pr-2 hover:bg-active`}
					>
						<img
							src={user.avatar}
							alt={user.name}
							className="w-8 h-8 rounded-full object-cover p-0.5 mr-2"
						/>
						<span className="text-md font-semibold mr-2">
							{user.name}
						</span>
						<span className={open && 'rotate-180'}>
							<Icon name="downDir" size={16} />
						</span>
					</Menu.Button>
					<Menu.Items className="absolute top-full right-0 w-48 bg-active rounded translate-y-2 z-10 p-1">
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={`flex justify-between items-center h-10 ${active && 'bg-white bg-opacity-10'} text-sm rounded px-2`}
								>
									Hesap
									<Icon name="external" size={16} />
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={`flex items-center h-10 ${active && 'bg-white bg-opacity-10'} text-sm rounded px-2`}
								>
									Profil
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={`flex items-center h-10 ${active && 'bg-white bg-opacity-10'} text-sm rounded px-2`}
								>
									Ayarlar
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={`flex items-center h-10 ${active && 'bg-white bg-opacity-10'} text-sm rounded px-2`}
								>
									Oturumu kapat
								</a>
							)}
						</Menu.Item>
					</Menu.Items>
				</>
			)}
		</Menu>
	);
}

export default Auth;
