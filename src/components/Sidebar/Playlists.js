function Playlists() {
	return (
		<nav className="flex-auto border-t border-white border-opacity-20 overflow-auto py-2 mt-2 mx-6">
			<ul>
				{
					new Array(40).fill(
						<li>
							<a href="#" className="flex items-center h-8 text-link text-s hover:text-white">
								Wax's Mix
							</a>
						</li>
					)
				}
			</ul>
		</nav>
	);
}

export default Playlists;
