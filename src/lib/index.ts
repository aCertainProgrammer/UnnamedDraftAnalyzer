export type Champion = string;

export type PoolData = {
	top: Array<Champion>;
	jungle: Array<Champion>;
	mid: Array<Champion>;
	adc: Array<Champion>;
	support: Array<Champion>;
};

export type DataSource = {
	all: PoolData;
	ally: PoolData;
	enemy: PoolData;
};

export type Draft = {
	redTeam: string;
	blueTeam: string;
	picks: Array<Champion>;
	bans: Array<Champion>;
};

export type ChampionHeatMap = Array<number>;
export type Heatmap = Map<Champion, ChampionHeatMap>;
