<script lang="ts">
	import type { ChampionHeatMap } from '$lib';
	import { readable } from 'svelte/store';

	const { heatmap }: { heatmap: ChampionHeatMap } = $props();

	function getColor(probabililty: number): string {
		let color = 'rgb(';

		if (probabililty > 0.5) {
			// Zero the red
			color += '0, ';

			const greenValue = Math.round(255 * probabililty);
			color += greenValue.toString() + ', ';
			// Add none of blue
			color += '0)';
		} else if (probabililty > 0) {
			let redValue = Math.round(255 * probabililty);
			if (redValue < 10) {
				redValue = 10;
			}
			color += redValue.toString() + ', ';

			// Zero the green
			color += '0, ';
			// Add none of blue
			color += '0)';
		} else {
			color = 'rgb(255,255,255)';
		}

		return color;
	}
</script>

<div>
	<p>Picks</p>
	{#each heatmap as probabililty, index}
		<p style="background-color: {getColor(probabililty)};">{Math.round(probabililty * 100)} %</p>
		{#if index == 9}
			<hr />
			<p>Bans</p>
		{/if}
	{/each}
</div>
