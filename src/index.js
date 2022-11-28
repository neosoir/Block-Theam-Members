import { registerBlockType, createBlock } from '@wordpress/blocks';
import './team-member';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType('blocks-course/team-members', {
	edit: Edit,
	save: Save,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/gallery'],
				transform: ({ images, columns }) => {
					const innerBlocks = images.map(({ url, id, alt }) => {
						return createBlock('blocks-course/team-member', {
							alt,
							id,
							url,
						});
					});

					return createBlock(
						'blocks-course/team-members',
						{
							columns: columns || 2,
						},
						innerBlocks
					);
				},
			},
			{
				type: 'block',
				blocks: ['core/image'],
				isMultiBlock: true,
				transform: (attributes) => {
					const innerBlocks = attributes.map(({ url, id, alt }) => {
						return createBlock('blocks-course/team-member', {
							alt,
							id,
							url,
						});
					});

					return createBlock(
						'blocks-course/team-members',
						{
							columns:
								attributes.lengh > 3 ? 3 : attributes.lengh,
						},
						innerBlocks
					);
				},
			},
		],
	},
});
