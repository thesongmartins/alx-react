// utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

describe('Utility functions tests', () => {
    test('getFullYear returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });

    test('getFooterCopy returns correct string based on argument', () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });

    test('getLatestNotification returns the expected notification string', () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    });
});
