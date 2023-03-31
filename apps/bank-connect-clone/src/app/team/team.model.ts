export interface TeamMember {
  accounts_id: number;
  companies_id: number;
  name: string;
  emp_code: string;
  team_member_details_id: number; // phele number daala tha but error
  team_invite: TeamInvite;
  email_id: string;
}
export interface TeamInvite {
  data: any;
  team_invites_id: number;
  role_name: string;
}
