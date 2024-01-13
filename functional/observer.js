function createObservableObject(target, defaultObserver, specificObservers = {}) {
	var observerStates = new Map(Object.keys(specificObservers).map((key) => [key, true]));

	return new Proxy(target, {
		set(obj, prop, value) {
			if (specificObservers[prop] && observerStates.get(prop)) {
				specificObservers[prop](value);
			} else {
				defaultObserver(prop, value);
			}
			obj[prop] = value;
			return true;
		},
		deactivateObserver(prop) {
			if (specificObservers[prop]) {
				observerStates.set(prop, false);
			}
		},
		activateObserver(prop) {
			if (specificObservers[prop]) {
				observerStates.set(prop, true);
			}
		},
		removeObserver(prop) {
			if (specificObservers[prop]) {
				delete specificObservers[prop];
				observerStates.delete(prop);
			}
		},
	});
}

function defaultObserver(prop, value) {
	console.log(`[Стандартный обработчик] Свойство ${prop} было установлено в`, value);
}
var specificObservers = {
	test: (value) => console.log(`[Специфический обработчик для 'test'] Новое значение:`, value),
};
var observable = createObservableObject({}, defaultObserver, specificObservers);

observable.test = 123;
observable.deactivateObserver('test');
observable.test = 456;
observable.activateObserver('test');
observable.test = 789;
observable.removeObserver('test');
observable.test = 'abc';
