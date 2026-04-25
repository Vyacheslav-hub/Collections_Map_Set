export class Settings {
    constructor() {
        this.settingsDefaultMap = new Map();
        this.settingsDefaultMap
            .set('theme', 'dark')
            .set('music', 'trance')
            .set('difficulty', 'easy');

        this.settingsUserMap = new Map();

        this.allowedValues = {
            theme: ['dark', 'light', 'gray'],
            music: ['trance', 'pop', 'rock', 'chillout', 'off'],
            difficulty: ['easy', 'normal', 'hard', 'nightmare']
        }
    }

    get settings () {
        const map = new Map();

        this.settingsDefaultMap.forEach((value, key) => map.set(key, value))

        this.settingsUserMap.forEach((value, key) => map.set(key, value))

        return map;
    }

    setSetting (key, value) {
            if (!this.allowedValues[key]) {
                throw new Error(`Ключа ${key} не существует`)
            }

            if (!this.allowedValues[key].includes(value)) {
                throw new Error(`Значения ${value} не существует`)
            }

            this.settingsUserMap.set(key, value);
    }

}
