import Marionette from 'backbone.marionette';
import TodoListItem from './TodoListItem';

export default Marionette.CollectionView.extend({
	tagName: 'ul',

	className: 'todo-list',

	childView: TodoListItem
})