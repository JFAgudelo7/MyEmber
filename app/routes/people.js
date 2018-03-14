import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return{
			people: [
				{
					id: 'Cristian',
					name: 'Cristian',
					isFemale: false,
				},
				{
					id: 'Melissa',
					name: 'Melissa',
					isFemale: true,
				},
				{
					id: 'Juan',
					name: 'Juan',
					isFemale: false,
				},
			]}}
})

