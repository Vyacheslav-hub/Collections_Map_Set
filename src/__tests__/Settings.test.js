import {Settings} from "../Settings.js";

describe('Settings', () => {
    let settings;

    beforeEach(() => {
        settings = new Settings();
    });


    test('должен устанавливать корректное значение настройки', () => {
        settings.setSetting('theme', 'light');

        expect(settings.settings.get('theme')).toBe('light');
    });

    test('должен перезаписывать ранее установленное значение', () => {
        settings.setSetting('theme', 'light');
        settings.setSetting('theme', 'gray');

        expect(settings.settings.get('theme')).toBe('gray');
    });

    test('должен устанавливать несколько настроек и сохранять остальные из default', () => {
        settings.setSetting('theme', 'light');
        settings.setSetting('music', 'rock');

        expect(settings.settings.get('theme')).toBe('light');
        expect(settings.settings.get('music')).toBe('rock');
        expect(settings.settings.get('difficulty')).toBe('easy'); // из default
    });

    test('должен выбрасывать ошибку при неизвестной настройке', () => {
        expect(() => {
            settings.setSetting('color', 'blue');
        }).toThrow();
    });

    test('должен выбрасывать ошибку при недопустимом значении', () => {
        expect(() => {
            settings.setSetting('theme', 'banana');
        }).toThrow();
    });

    test('должен возвращать настройки по умолчанию, если пользователь ничего не установил', () => {
        expect(settings.settings.get('theme')).toBe('dark');
        expect(settings.settings.get('music')).toBe('trance');
        expect(settings.settings.get('difficulty')).toBe('easy');
    });
});
