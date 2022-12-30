<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>FormData Test</title>
	<meta name="description" content="FormData test" />
</svelte:head>

<form action="?/edit" method="post" use:enhance>
	<label>
		Text
		<input type="text" name="text" />
	</label>
	<button>Save</button>
	{#if form}
		<pre>{JSON.stringify(form, null, 2)}</pre>
	{/if}
</form>
