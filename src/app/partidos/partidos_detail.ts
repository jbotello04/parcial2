import { Partido } from "./partido";

export class Partidos_detail extends Partido {

  winner_code: String;
  winner: String;
  venue: String;
  status: String;
  stage_name: String;
  location: String;
  last_checked_at: String;
  last_changed_at: String;
  away_team_country:String;
  attendance: String;
  home_team_country: String;
  datetime: String;
  constructor(
    attendance: string,
    away_team_country:string,
    datetime:string,
    home_team_country: string,
    id:number,
    last_checked_at: string,
    last_changed_at: string,
    location: string,
    stage_name: string,
    status: string,
    venue: string,
    winner: string,
    winner_code: string
  ){
    super(id,away_team_country,home_team_country);
    this.home_team_country=home_team_country;
    this.away_team_country=away_team_country;
    this.datetime=datetime;
    this.attendance=attendance;
    this.id=id;
    this.last_checked_at=last_checked_at;
    this.last_changed_at=last_changed_at;
    this.location=location;
    this.stage_name=stage_name;
    this.status=status;
    this.venue=venue;
    this.winner=winner;
    this.winner_code=winner_code;
  }


}
