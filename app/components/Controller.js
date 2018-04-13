import Marionette from 'backbone.marionette';
import TodoList from './model/TodoList';
import MainView from './view/Main';

export default Marionette.Object.extend({
	initialize: function (options) {
		this.app = options.app;

		this.todoList = new TodoList();
	},

	/**
	 * Fetch todo list from server then show main view.
	 */
	start: function () {
		var that = this;

		this.todoList.fetch({
			success: function (collection, response, options) {
				that.root = new MainView({
					collection: collection
				});
				that.app.showView(that.root);
			}
		});
	}
});