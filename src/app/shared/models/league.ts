export interface TeamStats {
  wins: number;
  draws: number;
  games: number;
  loses: number;
  scoredGoals: number;
  receivedGoals: number;
}

export interface Team {
  id: number;
  logo: string;
  name: string;
}

export interface Standing {
  away: TeamStats;
  home: TeamStats;
  team: Team;
  total: TeamStats;
  points: number;
  position: number;
}

export interface Group {
  name: string;
  standings: Standing[];
}

export interface League {
  id: number;
  logo: string;
  name: string;
  season: number;
}

export interface PremierLeagueData {
  groups: Group[];
  league: League;
}
