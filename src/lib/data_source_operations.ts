import type { Champion } from '$lib';
import { default_data } from './default_data';

export function getAllChampions(): Array<Champion> {
	let champions: Array<Champion> = [];
	for (const role in default_data.all) {
		// @ts-ignore
		champions = champions.concat(default_data.all[role]);
	}

	return champions;
}
