import React, { useState, useEffect } from 'react';
import Button from "../../../reusableComponents/button/Button";
import "./ProfileHR.scss"
import Text from "../../../reusableComponents/text/Text";
import {useTranslation} from "react-i18next";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

function ProfileHR() {
    const {t, i18n} = useTranslation();
    const [text, setText] = useState("");
    const [isTextChanged, setIsTextChanged] = useState(false);

    const modules = {
        toolbar: [
            ["bold", "italic", "underline"], // Жирний, курсив, підкреслення
            [{ header: 1 }, { header: 2 }], // Заголовки
            [{ list: "ordered" }, { list: "bullet" }], // Нумеровані й марковані списки
            ["link", "image"], // Посилання та зображення
            ["clean"], // Очистити форматування
        ],
    };

    // Перевірка на зміни в тексті
    useEffect(() => {
        setIsTextChanged(text !== "");
    }, [text]);

    // Обробник для кнопки Submit
    const handleSubmit = () => {
        console.log(text);
        setIsTextChanged(false); // При натисканні кнопки приховуємо її
    };

    return (
        <div id="profile-hr">
            <div className="bg-circle" id="left-middle-bg-circle"></div>
            <div className="bg-circle" id="right-bottom-bg-circle"></div>
            <div id="profile-hr-wrapper">
                <div id="profile-hr-content-wrapper">
                    <div id="photo-hr-wrapper">
                        <img className="profile-photo" src="/images/profile/UserDefaultPhoto.svg" alt="profile-photo"></img>
                    </div>
                    <div id="profile-hr-main-content-wrapper">
                        <div id="profile-hr-left-content-wrapper">
                            <div id="profile-hr-user-info-wrapper">
                                <Text fontSize={30} as="h1">Ім’я Прізвище HR</Text>
                                <Text fontSize={25} as="h2">Назва компанії</Text>
                                <Text fontSize={25} as="h2">Країна, місто</Text>
                            </div>
                            <div id="profile-hr-other-info-wrapper">
                                <div className="profile-hr-block">
                                    <Text fontSize={20} as="h2">{t("profileHR.myContacts")}</Text>
                                    <Text fontSize={20} as="a">{t("profileHR.moreDetailsHere")}</Text>
                                </div>
                                <div className="profile-hr-block">
                                    <Text fontSize={20} as="h2" id="additional-information-text">{t("profileHR.additionalInformation")}</Text>
                                    <Text fontSize={20} as="p">Some Info</Text>
                                </div>
                            </div>
                        </div>
                        <div id="profile-hr-right-content-wrapper">
                            <div id="profile-hr-buttons-wrapper">
                                <Button fontSize={20} fontWeight={500} buttonText={t("profileHR.addNewVacancy")} className="profile-hr-buttons"/>
                                <Button fontSize={20} fontWeight={500} buttonText={t("profileHR.openVacancies")} className="profile-hr-buttons"/>
                            </div>
                            <div id="profile-hr-about-wrapper" className="profile-hr-block">
                                <Text fontSize={20} as="h2">{t("profileHR.aboutCompany")}</Text>
                                <ReactQuill
                                    theme="bubble"
                                    value={text}
                                    onChange={setText}
                                    modules={modules}
                                    placeholder={t("profileHR.aboutPlaceholder")}
                                    id="profile-hr-about-text"
                                />
                                {isTextChanged && (
                                    <div id="submit-button-wrapper">
                                        <Button
                                            fontSize={20}
                                            fontWeight={500}
                                            buttonText={t("profileHR.save")}
                                            buttonColor="primary"
                                            className="profile-hr-buttons"
                                            onClick={handleSubmit}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileHR;
