import Backbone from 'backbone';
import Constants from '../Constants';

export default Backbone.Model.extend({
	defaults: {
		text: '',
		completed: false
	},

	isCompleted: function () {
		return this.get('completed');
	},

	toggle: function () {
		this.set('completed', !this.isCompleted());

		$.ajax({
			url: 'http://quip-todos.herokuapp.com/mark_completed',
			method: 'POST',
			data: {
				email: Constants.email,
				id: this.get('id'),
				completed: this.get('completed')
			}
		})
	}
});
