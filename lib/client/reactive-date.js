/*
For each ReactiveDate instance:
	Create new dep.
	Use interval to trigger recomp
		* period of interval is the constr. fn argument, defaults to 1000ms.
		* keep track of interval handle so it can be stopped later.
		* expose stop method on the object.
	Make the now() method depend on the comp.
		* named now() instead of get() to mimic familiar Date.now() syntax.
*/

ReactiveDate = function(period){
	var self = this;
	var dep = new Tracker.Dependency;
	var handle = Meteor.setInterval(function(){
		dep.changed();
	}, period || 1000)
	self.stop = function(){
		clearInterval(handle)
	}
	self.now = function(){
		dep.depend();
		return Date.now();
	}
}