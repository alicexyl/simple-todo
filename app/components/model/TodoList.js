import Backbone from 'backbone';
import Constants from '../Constants';
import Todo from './Todo';

export default Backbone.Collection.extend({
	url: 'http://quip-todos.herokuapp.com/get_todos?email=' + Constants.email,

	model: Todo,

	addItem: function (todoText) {
		$.ajax({
			url: 'http://quip-todos.herokuapp.com/add_todo',
			method: 'POST',
			data: {
				email: Constants.email,
				text: todoText
			},
			context: this,
			success: function (data) {
				this.add(data);
			}
		})
	}
});
