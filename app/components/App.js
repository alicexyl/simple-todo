import Marionette from 'backbone.marionette';
import Controller from './Controller';
import MainView from './view/Main';

export default Marionette.Application.extend({
	region: '#app',

	onStart() {
		var controller = new Controller({
			app: this
		});

		controller.start();
		// this.showView(new MainView());
	}
});
