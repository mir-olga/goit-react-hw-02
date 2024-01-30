import css from './Notification.module.css';

export const Notification = ({noFeedback}) => {
    return (
        <div className={css.notification}>
            <p>{noFeedback}</p>
         </div>
    )
}