export interface Task {
    id?: number; //Cuando creamos podría no venir con id
    text: string;
    day: string; //
    reminder: boolean;
}