'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../../i18nConfig';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = e => {
        const newLocale = e.target.value;

        // Set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // Redirect to the new locale path
        const isDefaultLocale = currentLocale === i18nConfig.defaultLocale;

        // Remove the current locale from the pathname
        const newPathname = currentPathname.replace(`/${currentLocale}`, '');

        // Construct the new pathname based on the default locale setting
        const targetPath = isDefaultLocale && !i18nConfig.prefixDefault
            ? `/${newLocale}${newPathname}`
            : `/${newLocale}${newPathname}`;

        router.push(targetPath);
        router.refresh();
    };
    return (
        <select onChange={handleChange} value={currentLocale} className="form-select" style={{borderRadius:"0px",width:"28%",marginLeft:"10px"}}>
            <option value="en">EN</option>
            <option value="ru">RU</option>

        </select>
    );
}