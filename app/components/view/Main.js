import Marionette from 'backbone.marionette';
import template from '../../templates/main.jst';
import AddView from './Add';
import TodoListView from './TodoList';


export default Marionette.View.extend({
	template: template,

	regions: {
		add: '.add',
		list: '.list'
	},

	onRender: function () {
		this.showChildView('add', new AddView({
			collection: this.collection
		}));
		this.showChildView('list', new TodoListView({
			collection: this.collection
		}))
	}
});
