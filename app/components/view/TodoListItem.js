import Marionette from 'backbone.marionette';
import template from '../../templates/todo-item.jst';

export default Marionette.View.extend({
	tagName: 'li',

	template: template,

	className: function () {
		var state = this.model.get('completed') ? 'completed' : '';

		return [ 'todo-list__item', state ].join(' ');
	}
});