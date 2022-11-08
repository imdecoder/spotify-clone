import { Icon } from 'const/Icons';

function DownloadApp() {
	return (
		<a href="#" className="flex flex-shrink-0 gap-x-4 items-center h-12 text-link text-sm font-semibold px-6 hover:text-white">
			<Icon name="download" size={20} />
			Uygulamayı Yükle
		</a>
	);
}

export default DownloadApp;
