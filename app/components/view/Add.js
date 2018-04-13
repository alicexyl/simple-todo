import Marionette from 'backbone.marionette';
import template from '../../templates/add.jst';

export default Marionette.View.extend({
	template: template,

	ui: {
		input: '.new-todo',
		addButton: '.add-button'
	},

	events: {
		'click @ui.addButton': 'onAddButtonClick'
	},

	onAddButtonClick: function (e) {

	}
});