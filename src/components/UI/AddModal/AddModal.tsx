import React, {FC} from 'react';
import style from '../AddModal/AddModal.module.css'

interface IAddModal {
    visible: boolean
    setVisible: any
    children?: any
}

const AddModal:FC<IAddModal> = ({visible, setVisible, children}) => {

    const rootClasses = [style.addModal]
    if (visible) rootClasses.push(style.active)

    setTimeout(() => {
        setVisible(false)
    }, 1000)

    return (
        <div
            className={rootClasses.join(' ')}
        >
            <div
                className={style.modalWrapper}
            >
                {children}
            </div>
        </div>
    );
};

export default React.memo(AddModal);