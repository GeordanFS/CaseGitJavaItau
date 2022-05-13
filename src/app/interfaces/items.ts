import { PullsOfProject } from "./pulls-of-project";
import { Repositories } from "./repositories";

export interface Items {
    items: Array<Repositories>
    pulls: Array<PullsOfProject>
}
