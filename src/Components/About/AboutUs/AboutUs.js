import React, {Fragment} from "react";
import './AboutUs.scss'
import header from "../img/header.svg"
import one from "../img/people/1.jpg"
import oneXs from "../img/people/1-xs.jpg"
import two from "../img/people/2.jpg"
import twoXs from "../img/people/2-xs.jpg"
import three from "../img/people/3.jpg"
import threeXs from "../img/people/3-xs.jpg"
import fourXs from "../img/people/4-xs.jpg"
import four from "../img/people/4.jpg"
import fiveXs from "../img/people/5-xs.jpg"
import five from "../img/people/5.jpg"
import sixXs from "../img/people/6-xs.jpg"
import six from "../img/people/6.jpg"

const About = () => (
    <Fragment>
        <main>
            <section className="about__frame">
                <div className="content__container is-align-center">
                    <img src={header} alt="four people stand with a dog"/>
                    <h1>О нас</h1>
                    <div className="about__frame-text">
                        <p>Это учебный проект, созданный с целью получения боевого опыта в разработке
                            настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга,
                            в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
                    </div>
                </div>
            </section>
            <section className="contacts__frame is-grey">
                <div className="content__container is-align-center">
                    <h2>Контакты</h2>
                    <div className="contacts__frame-wrapper">
                        <div className="contacts__frame-wrapper-item">
                            <div className="contact_type">Электронная почта</div>
                            <a className="contact_info is-animated" href="" target="_blank"
                               rel="nofollow">drive@gmail.com</a>
                        </div>
                        <div className="vertical_separator is-desktop"></div>
                        <div className="contacts__frame-wrapper-item">
                            <div className="contact_type">Телефон</div>
                            <div className="contact_info">+996 705 18 09 00</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team__frame">
                <div className="content__container is-align-center">
                    <h2>Команда</h2>
                    <div className="team__frame-wrapper">
                        <div className="team__frame-wrapper-item">
                            <img src={one} className="is-desktop" alt="face Ivan Ivanov"/>
                                <img src={oneXs} alt="face Ivan Ivanov" className="is-mobile"/>
                                    <div className="team__frame-wrapper-name">Иван Иванов</div>
                                    <div className="team__frame-wrapper-job">СЕО</div>
                        </div>
                        <div className="team__frame-wrapper-item">
                            <img src={ two } className="is-desktop" alt="face Alexey Smirnov"/>
                                <img src={ twoXs } className="is-mobile" alt="face Alexey Smirnov"/>
                                    <div className="team__frame-wrapper-name">Алексей Смирнов</div>
                                    <div className="team__frame-wrapper-job">Frontend-разработчик</div>
                        </div>
                        <div className="team__frame-wrapper-item">
                            <img src={ three } className="is-desktop" alt="face Denis Yartsev"/>
                                <img src={ threeXs } className="is-mobile" alt="face Denis Yartsev"/>
                                    <div className="team__frame-wrapper-name">Денис Ярцев</div>
                                    <div className="team__frame-wrapper-job">Backend-разработчик</div>
                        </div>
                        <div className="team__frame-wrapper-item">
                            <img src={ four } className="is-desktop" alt="face Nikolay Morozov"/>
                                <img src={ fourXs } className="is-mobile" alt="face Nikolay Morozov"/>
                                    <div className="team__frame-wrapper-name">Николай Морозов</div>
                                    <div className="team__frame-wrapper-job">Дизайнер</div>
                        </div>
                        <div className="team__frame-wrapper-item">
                            <img src={ five } className="is-desktop" alt="face Irina Deeva"/>
                                <img src={ fiveXs } className="is-mobile" alt="face Irina Deeva"/>
                                    <div className="team__frame-wrapper-name">Ирина Деева</div>
                                    <div className="team__frame-wrapper-job">Копирайтер</div>
                        </div>
                        <div className="team__frame-wrapper-item">
                            <img src={six} className="is-desktop" alt="face Maria Strelkova"/>
                                <img src={sixXs} className="is-mobile" alt="face Maria Strelkova"/>
                                    <div className="team__frame-wrapper-name">Мария Стрелкова</div>
                                    <div className="team__frame-wrapper-job">SMM</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Fragment>
)

export default About;