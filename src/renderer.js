import { TextButton } from '@getflywheel/local-components';

module.exports = function (context) {
	const hooks = context.hooks;

	hooks.addContent('SiteInfo_Top_TopRight', (site) => {
		return (
			<TextButton
				onClick={() =>
					require('electron').shell.openExternal(
						`phpstorm://open?file=${site.path + '/app/public/'}`,
					)
				}
			>
				Open in PHPStorm
			</TextButton>
		);
	});
}
