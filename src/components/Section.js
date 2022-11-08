import { NavLink } from 'react-router-dom';

import { Icon } from 'const/Icons';

function Section({ title, more = false, items }) {
	const imageStyle = item => {
		switch (item.type) {
			case 'podcast':
				return 'rounded-xl';

			case 'artist':
				return 'rounded-full';

			default:
				return 'rounded';
		}
	};

	return (
		<section>
			<header className="flex justify-between items-center mb-4">
				<NavLink
					to={more ?? '#'}
					className="text-white text-2xl font-semibold tracking-tight hover:underline"
				>
					{title}
				</NavLink>
				{more && (
					<NavLink
						to={more}
						className="text-link text-xs font-semibold uppercase tracking-wider hover:underline"
					>
						Hepsini Gör
					</NavLink>
				)}
			</header>
			<div className="grid grid-cols-7 gap-x-6">
				{items.map(item => (
					<NavLink
						to="/"
						key={item.id}
						className="group bg-footer p-4 rounded hover:bg-active"
					>
						<div className="relative pt-[100%] mb-4">
							<img
								src={item.image}
								className={`absolute w-full h-full object-cover inset-0 ${imageStyle(item)}`}
							/>
							<button className="justify-center items-center absolute bottom-2 right-2 w-10 h-10 bg-primary rounded-full hidden group-hover: flex group-focus: flex">
								<Icon name="play" size={16} />
							</button>
						</div>
						<h6 className="overflow-hidden text-base font-semibold overflow-ellipsis whitespace-nowrap">
							{item.title}
						</h6>
						<p className="text-link text-sm line-clamp-2 mt-1">
							{item.description}
						</p>
					</NavLink>
				))}
			</div>
		</section>
	);
}

export default Section;
