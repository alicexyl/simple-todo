import Backbone from 'backbone';
import Constants from '../Constants';

export default Backbone.Collection.extend({
	url: 'http://quip-todos.herokuapp.com/get_todos?email=' + Constants.email
});
