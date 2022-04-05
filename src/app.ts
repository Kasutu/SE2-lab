interface CallbackOneParam<T1, T2 = void> {
	(param1: T1): T2;
}

function sayHi(callback: CallbackOneParam<string>) {
	callback('Hi!');
}

function greeter(message: string) {
	console.log(`${message}, how are you doing?`);
}

sayHi(greeter);

// class Foo {
//   save(callback: (n: number) => any): void {
//     callback(42);
//   }
// }
// var foo = new Foo();

// var strCallback = (result: string): void => {
//   alert(result);
// };
// var numCallback = (result: number): void => {
//   alert(result.toString());
// };

// foo.save(strCallback); // not OK
// foo.save(numCallback); // OK
