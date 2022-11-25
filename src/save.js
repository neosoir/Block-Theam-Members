//import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { columns } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `has-${columns}`,
			})}
		>
			<InnerBlocks.Content />
		</div>
	);
}
