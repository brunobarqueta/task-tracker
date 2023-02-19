import { NotificationType } from "@/interfaces/INotification";
import { store } from "@/store";
import { NOTIFICATE } from "@/store/mutation-types";

type Notificator = {
    notificate: (type: NotificationType, title: string, text: string) => void
}

export default () : Notificator => {

    const notificate = (type: NotificationType, title: string, text: string) : void => {
        store.commit(NOTIFICATE, {
            title,
            text,
            type
        });
    }

    return {
        notificate
    }
}