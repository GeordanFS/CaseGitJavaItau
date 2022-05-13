import { Owner } from "./owner";

export interface PullsOfProject {
    id: number;
    user: Owner;
    title: string;
    created_at: string;
    body: string;
}
