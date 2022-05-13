import { Owner } from './owner';

export interface Repositories {
    id: number;
    name: string;
    full_name: string;
    owner: Owner;
    html_url: string;
    description: string;
    ssh_url: string;
    forks_count: number;
    stargazers_count:number;
}
