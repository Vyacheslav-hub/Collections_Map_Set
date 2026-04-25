import { Team } from "../Team.js";
import { Character } from "../Character.js";

describe('Team', () => {
    let team;

    beforeEach(() => {
        team = new Team();
    });

    test('add добавляет игрока и не позволяет дубли', () => {
        const player = new Character('name', 2);

        team.add(player);

        expect(team.members.has(player)).toBe(true);
        expect(() => team.add(player)).toThrow();
    });

    test('addAll добавляет уникальных игроков', () => {
        const p1 = new Character('name', 2);
        const p2 = new Character('Ivan', 3);

        team.addAll(p1, p2, p1);

        expect(team.members.size).toBe(2);
        expect(team.members.has(p1)).toBe(true);
        expect(team.members.has(p2)).toBe(true);
    });

    test('toArray возвращает корректный массив', () => {
        const p1 = new Character('name', 2);
        const p2 = new Character('Ivan', 3);

        team.addAll(p1, p2);

        expect(team.toArray()).toEqual([p1, p2]);
    });
});
