interface User {
	name: string;
	id: number;
}

class UserAccount {
	name: string;
	id: number;

	constructor(name: string, id: number) {
		this.name = name;
		this.id = id;
	}
}

const user = new UserAccount('gem', 1);

console.log(user);

// You can explicitly describe this
// object’s shape using an interface declaration:

interface User {
	name: string;
	id: number;
}

// You can then declare that a JavaScript object
// conforms to the shape of your new interface by
// using syntax like : TypeName after a variable declaration:

function getAdminUser(): User {
	// ...
}

function deleteUser(user: User) {
	// ...
}
