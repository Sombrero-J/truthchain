export const actions = {
	default : async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		return { success: true , email: email};
	},
};