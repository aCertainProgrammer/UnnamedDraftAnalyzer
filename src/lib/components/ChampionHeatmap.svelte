<script lang="ts">
	import type { ChampionHeatMap } from '$lib';

	const { heatmap }: { heatmap: ChampionHeatMap } = $props();
</script>

<div>
	<p>Picks</p>
	{#each heatmap as probabililty, index}
		<p>{probabililty * 100} %</p>
		{#if index == 9}
			<hr />
			<p>Bans</p>
		{/if}
	{/each}
</div>
