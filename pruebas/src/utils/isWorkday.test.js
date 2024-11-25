import { describe, it, expect } from 'vitest';
import { isWorkday } from './isWorkday';

describe('Tests de isWorkday()', () => {
  it('Debe retornar true para días laborales', () => {
    expect(isWorkday('lunes')).toBe(true);
    expect(isWorkday('martes')).toBe(true);
    expect(isWorkday('miércoles')).toBe(true);
    expect(isWorkday('jueves')).toBe(true);
    expect(isWorkday('viernes')).toBe(true);
  });

  it('Debe retornar false para días no laborales', () => {
    expect(isWorkday('sábado')).toBe(false);
    expect(isWorkday('domingo')).toBe(false);
  });

  it('Debe retornar false para un día no válido', () => {
    expect(isWorkday('falsoDía')).toBe(false);
  });
});
