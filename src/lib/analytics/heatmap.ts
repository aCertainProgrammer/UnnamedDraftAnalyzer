import type { Draft, Heatmap, ChampionHeatMap } from '$lib';
import { getAllChampions } from '$lib/data_source_operations';

export function getHeatmap(drafts: Array<Draft>): Heatmap {
	// Note that we are assuming that a champion is unique in a given draft
	const maxOccurences = drafts.length;
	const heatmap = new Map() as Heatmap;
	for (const champion of getAllChampions()) {
		const occurenceArray: Array<number> = [];
		for (let i = 0; i < 20; i++) {
			occurenceArray.push(0);
		}

		heatmap.set(champion, occurenceArray);
	}

	drafts.forEach((draft) => {
		draft.picks.forEach((champion, index) => {
			const array = heatmap.get(champion);
			if (array == null) {
				throw 'Champion occurence array is undefined for champion: ' + champion;
			}

			array[index] += 1;
		});

		draft.bans.forEach((champion, index) => {
			const array = heatmap.get(champion);
			if (array == null) {
				throw 'Champion occurence array is undefined for champion: ' + champion;
			}

			array[index] += 1;
		});
	});

	for (const champion of getAllChampions()) {
		let occurenceArray = heatmap.get(champion);
		if (occurenceArray == null) {
			throw 'Champion occurence array is undefined for champion: ' + champion;
		}

		occurenceArray = occurenceArray.map((numberOfOccurences) => numberOfOccurences / maxOccurences);

		heatmap.set(champion, occurenceArray);
	}

	return heatmap;
}
