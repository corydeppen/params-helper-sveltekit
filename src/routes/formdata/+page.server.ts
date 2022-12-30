import { fail } from '@sveltejs/kit';
import { getFormData } from 'remix-params-helper';
import { z } from 'zod';
import type { Actions } from './$types';

export const actions: Actions = {
	edit: async ({ request }) => {
		const schema = z.object({
			text: z.string().optional()
		});
		const { data, errors, success } = await getFormData(request, schema);

		if (!success) {
			return fail(400, errors);
		}

		return { data };
	}
};
