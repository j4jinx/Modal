import React from 'react';
import { action } from '@storybook/addon-actions';
import Modal from '../src/index.jsx';

export default {
	component: Modal,
	title: 'Modal',
	argTypes: {
		color: {
			control: { type: 'color' }
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'select' }
		},
		overlayColor: {
			options: ['#ffebee', '#e0e0e0', '#ffe0b2', '#e8f5e9', '#e3f2fd', '#f3e5f5'],
			control: { type: 'select' }
		}
	},
	args: {
		onClose: action('onClose Called'),
		onOverlayClick: action('onOverlayClick Called'),
	},

};

const Template = (args) => <Modal {...args}>
	<div style={{ textAlign: 'center' }}>
		<h1>Content Start</h1>
		<div>Content sample</div>
		<h1>Content sample</h1>
		<div>Content sample</div>
		<h1>Content sample</h1>
		<div>Content sample</div>
		<h1>Content sample</h1>
		<div>Content sample</div>
		<h1>Content sample</h1>
		<div>Content sample</div>
		<h1>Content End</h1>
		<div>Content sample</div>
	</div>
</Modal>;

export const Demo = Template.bind({});
Demo.args = {
	title: 'Modal Title',
	opened: false,
	size: "md",
	color: '#ffffff',
	overlayColor: '#e0e0e0',
};