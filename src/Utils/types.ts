export type AllMovieProps = {
	id: number;
	title: string;
	release_date: string;
	box_office: string;
	duration: number;
	overview: string;
	cover_url: string;
	trailer_url: string;
	directed_by: string;
	phase: number;
	saga: Saga;
	chronology: number;
	post_credit_scenes: number;
	imdb_id: string;
	updated_at: Date;
	related_movies: AllMovieProps[];
};

export type AllShowsProps = {
	id: number;
	title: string;
	release_date: Date;
	last_aired_date: Date;
	season: number;
	number_episodes: number;
	overview: string;
	cover_url: string;
	trailer_url: string;
	directed_by: string;
	phase: number;
	saga: Saga;
	imdb_id: string;
};

export enum Saga {
	InfinitySaga = "Infinity Saga",
	MultiverseSaga = "Multiverse Saga",
	Spotlight = "Spotlight",
}
