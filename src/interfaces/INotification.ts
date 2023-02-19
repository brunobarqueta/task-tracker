export enum NotificationType {
    success,
    danger,
    warning
}

export interface INotification {
    title: string;
    text: string;
    type: NotificationType,
    id: number
}