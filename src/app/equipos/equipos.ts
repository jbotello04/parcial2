export class Equipo {
  id: number;
  country:	String;
  draws: number;
  games_played:	number;
  goal_differential:	number;
  goals_against:	number;
  goals_for:	number;
  group_letter:	String
  group_points:	number;
  losses:	number;
  name:	String;
  wins:	number;



  constructor(id: number,
    country:	String,
    draws: number,
    games_played:	number,
    goal_differential:	number,
    goals_against:	number,
    goals_for:	number,
    group_letter:	String,
    group_points:	number,
    losses:	number,
    name:	String,
    wins:	number

    ){
      this.id = id;
      this.country = country;
      this.draws = draws;
      this.games_played = games_played;
      this.goal_differential = goal_differential;
      this.goals_against = goals_against;
      this.goals_for = goals_for;
      this.group_letter = group_letter;
      this.group_points = group_points;
      this.losses = losses;
      this.name = name;
      this.wins = wins;

    }
}
