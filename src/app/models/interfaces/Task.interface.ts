//añadir nivel de urgencia
export enum Levels{
    "Info",
    "Urgent",
    "Blocking"
}

export interface ITask{
    title: string;
    description?: string; // (?) for optional
    completed: boolean;
    level: Levels; //tipo de urgencia
}