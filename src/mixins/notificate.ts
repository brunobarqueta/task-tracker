import { NOTIFICATE } from './../store/mutation-types';
import { NotificationType } from './../interfaces/INotification';
import { store } from '@/store';

export const mixinNotification = {
    methods: {
        notificate(type: NotificationType, title: string, text: string) : void{
            store.commit(NOTIFICATE, {
                title,
                text,
                type
            });
        }
    }
}