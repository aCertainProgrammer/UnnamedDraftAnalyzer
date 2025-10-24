<script lang="ts">
	import { test_data } from '$lib/test_data';
	import { getHeatmap } from '$lib/analytics/heatmap';
	import { getAllChampions } from '$lib/data_source_operations';
	import ChampionHeatmap from '$lib/components/ChampionHeatmap.svelte';

	const heatmap = getHeatmap(test_data);
	// const champions = getAllChampions()
	const champions = ['ahri', 'ashe', 'elise'];
</script>

<div>
	<p>Picks</p>
	{#each champions as champion}
		<div>
			<h2>{champion}</h2>
			{#if heatmap.get(champion) == null}
				<p style="background: red">Could not read heatmap for champion: {champion}</p>
			{:else}
				<ChampionHeatmap heatmap={heatmap.get(champion)} />
			{/if}
		</div>
	{/each}
</div>
