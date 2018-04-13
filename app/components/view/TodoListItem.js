import Marionette from 'backbone.marionette';
import template from '../../templates/todo-item.jst';

export default Marionette.View.extend({
	tagName: 'li',

	template: template,

	ui: {
		toggle: '.toggle'
	},

	events: {
		'click @ui.toggle': 'onToggleClicked'
	},

	modelEvents: {
		'change:completed': 'onCompletedChanged'
	},

	className: function () {
		var state = this.model.isCompleted() ? 'is-completed' : '';

		return [ 'todo-list__item', state ].join(' ');
	},

	onToggleClicked: function () {
		this.model.toggle();
	},

	onCompletedChanged: function () {
		this.$el.toggleClass('is-completed', this.model.isCompleted());
	}
});