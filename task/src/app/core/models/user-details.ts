export class UserDetail
{
    owner:Owner;
    language:string;
    open_issues_count:number;
    watchers:number;
    forks_count:number
}

export class Owner
{
    repos_url:string;
}