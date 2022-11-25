import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('blocks-course/team-member', {
	title: __('Team Member', 'team-members'),
	description: __('A team grid.'),
	parent: ['blocks-course/team-members'],
	icon: 'admin-users',
	edit: () => <p>edit</p>,
	save: () => <p>save</p>,
});
