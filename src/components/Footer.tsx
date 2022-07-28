import React, {FC} from 'react';

const Footer:FC = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-wrapper'>
                    <div className='info-company'>
                        <span className='f-text'>Copyright © 2019–2020 Компания "I-ROOF" </span>
                    </div>
                    <div className='f-block'>
                        <span className='f-text f-left'>Предоставленная на сайте информация несёт справочный характер. Информация на сайте не является публичной офертой, определяемой положениями Статьи 437 ГК РФ.</span>
                        <span className='f-text f-right'>Разработка и дизайн © 2020 студия Webpop.ru</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;