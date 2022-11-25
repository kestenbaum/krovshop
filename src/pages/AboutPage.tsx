import React, {FC} from 'react';
import AboutImg from '../assets/img/about.png'
import {NavLink} from "react-router-dom";
import MainButton from "../components/UI/MainButton/MainButton";

export const AboutPage:FC = () => {
    return (
        <div className='about-page'>
            <div className="container">
                <div className="about-wrapper">
                    <h1 className="title-about">Заголовок статьи СЕО “Кровельные материалы”</h1>

                    <div className="about-description">
                        <span className="t-about">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel convallis diam scelerisque pellentesque. Purus platea elementum odio turpis pulvinar nunc a pellentesque viverra. Nulla mattis aliquet vel at. Eu sit vivamus morbi venenatis neque est. Id morbi ultricies habitant integer viverra nunc vivamus. Eget consectetur sit scelerisque vitae. Tincidunt libero in euismod maecenas eu egestas nunc sed. Sit aenean tristique velit sapien bibendum nullam diam pharetra, rutrum. Porttitor duis sed massa neque eu tellus eget lorem. Bibendum pharetra eu euismod sed nulla pretium. Enim, quis vulputate mauris, scelerisque tellus cum sit eget sem. Sollicitudin nunc, lectus id arcu sed facilisis aliquam dignissim.
                        </span>
                        <img src={AboutImg} alt="about" className='about-img'/>
                    </div>
                    <div className="about-description">
                        <span className="t-about">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel convallis diam scelerisque pellentesque. Purus platea elementum odio turpis pulvinar nunc a pellentesque viverra. Nulla mattis aliquet vel at. Eu sit vivamus morbi venenatis neque est. Id morbi ultricies habitant integer viverra nunc vivamus. Eget consectetur sit scelerisque vitae. Tincidunt libero in euismod maecenas eu egestas nunc sed. Sit aenean tristique velit sapien bibendum nullam diam pharetra, rutrum. Porttitor duis sed massa neque eu tellus eget lorem. Bibendum pharetra eu euismod sed nulla pretium. Enim, quis vulputate mauris, scelerisque tellus cum sit eget sem. Sollicitudin nunc, lectus id arcu sed facilisis aliquam dignissim.
                        </span>
                    </div>
                    <div className="about-description">
                        <span className="t-about">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel convallis diam scelerisque pellentesque. Purus platea elementum odio turpis pulvinar nunc a pellentesque viverra. Nulla mattis aliquet vel at. Eu sit vivamus morbi venenatis neque est. Id morbi ultricies habitant integer viverra nunc vivamus. Eget consectetur sit scelerisque vitae. Tincidunt libero in euismod maecenas eu egestas nunc sed. Sit aenean tristique velit sapien bibendum nullam diam pharetra, rutrum. Porttitor duis sed massa neque eu tellus eget lorem. Bibendum pharetra eu euismod sed nulla pretium. Enim, quis vulputate mauris, scelerisque tellus cum sit eget sem. Sollicitudin nunc, lectus id arcu sed facilisis aliquam dignissim.
                        </span>
                    </div>
                    <div className="about-description">
                        <span className="t-about">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel convallis diam scelerisque pellentesque. Purus platea elementum odio turpis pulvinar nunc a pellentesque viverra. Nulla mattis aliquet vel at. Eu sit vivamus morbi venenatis neque est. Id morbi ultricies habitant integer viverra nunc vivamus. Eget consectetur sit scelerisque vitae. Tincidunt libero in euismod maecenas eu egestas nunc sed. Sit aenean tristique velit sapien bibendum nullam diam pharetra, rutrum. Porttitor duis sed massa neque eu tellus eget lorem. Bibendum pharetra eu euismod sed nulla pretium. Enim, quis vulputate mauris, scelerisque tellus cum sit eget sem. Sollicitudin nunc, lectus id arcu sed facilisis aliquam dignissim.
                        </span>
                    </div>
                    <NavLink to='/' className='about-btn'>
                        <MainButton>Вернуться назад</MainButton>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
