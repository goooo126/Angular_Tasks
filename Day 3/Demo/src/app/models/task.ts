export interface Task {
    id: number;
    name: string;
    description: string;
    done: boolean;
    priority: 'high' | 'medium' | 'low';
    dueDate: string;

}
