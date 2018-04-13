import Marionette from 'backbone.marionette';
import template from '../../templates/add.jst';
import _ from 'underscore';

export default Marionette.View.extend({
	template: template,

	ui: {
		input: '.new-todo',
		addButton: '.add-button'
	},

	events: {
		'click @ui.addButton': 'onAddButtonClick'
	},

	onAddButtonClick: function () {
		var input = this.ui.input,
			inputVal = input.val();

		if (inputVal != '') {
			this.collection.addItem(inputVal);
			input.val('');
		}
	}
});