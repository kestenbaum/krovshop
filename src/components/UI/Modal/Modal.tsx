import React, {FC} from 'react';
import style from '../Modal/Modal.module.css'

interface IModal {
    visible: boolean
    setVisible: any
    children?: any
}

const Modal:FC<IModal> = ({visible, setVisible, children}) => {

    const rootClasses = [style.modal]
    if (visible) rootClasses.push(style.active)

    return (
        <div
            className={rootClasses.join(' ')}
            onClick = {() => setVisible(false)}
        >
            <div
                className={style.modalWrapper}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default React.memo(Modal);