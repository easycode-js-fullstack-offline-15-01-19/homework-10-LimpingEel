// -------------------------- Home work --------------------------
// -------------------------- Дорошенко Никита Андреевич --------------------------

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.addEventListener('load', () => {
	// console.log(xhr.responseText);
	// console.log(xhr.status);
	// console.log(xhr.statusText);
	const res = JSON.parse(xhr.responseText);
	console.log(res)
	renderTodos(res)
});


xhr.send();

function renderTodos(users) {
	users.forEach((user) => addTodoToView(user));
}

function addTodoToView(user) {
	const template = `
	<div class="dropdown-item" id="name">${user.name}</div>
	<div class="d-none" id="info">
		<ul>
			<li>Phone: ${user.phone}</li>
			<li>Email: ${user.email}</li>
			<li>Username: ${user.username}</li>
			<li>Website: ${user.website}</li>
		</ul>
	</div>
	`;
	document.body.insertAdjacentHTML('afterbegin', template);
	console.log(document.getElementById('name'))
	let person = document.getElementById('name');
	let personInfo = document.getElementById('info');
	person.addEventListener('click', () => { personInfo.classList.toggle('d-none')})
}