import { formatTimestamp } from 'lib/dateTimeHelpers';

describe('dateTimeHelpers', () => {
  describe('formatTimestamp', () => {
    it('should check the empty case', () => {
      expect(formatTimestamp('')).toBe('');
    });

    it('should check the invalid case', () => {
      expect(formatTimestamp('invalid')).toBe('');
    });

    it('should output the correct date', () => {
      const date = new Date();
      expect(formatTimestamp(date)).toBe(
        date.toLocaleString('en-US', { hour12: true })
      );
      expect(formatTimestamp(date.getTime())).toBe(
        date.toLocaleString('en-US', { hour12: true })
      );
    });
  });
});
