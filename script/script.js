const story = document.getElementsByClassName('story')[0];
// const randomUser = [
// 	'Amalia Dalgardno',
// 	'Lind Klazenga',
// 	'Letta Dodswell',
// 	'Corrinne Goodsall',
// 	'Evelyn Cartan',
// 	'Wye Twinberrow',
// 	'Hubey Daley',
// 	'Eachelle Whiles',
// 	'Neil Lunbech',
// 	'	Brittani Miebes',
// 	'Simone Costan',
// 	'Boyd Pechard',
// 	'Jori Bloxland',
// 	'Iona Doick',
// 	'Geoffrey Preskett',
// 	'Hercule Rove',
// 	'Nanci Sturney',
// 	'Creigh Dahill',
// 	'Hana Ubsdall',
// 	'Peirce Malarkey'
// ]

let setIdStory = () => {
	let list = story.children;
	for (let i = 0; i < list.length - 1; ++i) {
		list[i].id = `story${i}`;
	}
}
setIdStory();