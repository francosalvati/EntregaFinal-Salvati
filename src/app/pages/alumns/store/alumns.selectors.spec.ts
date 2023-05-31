import * as fromAlumns from './alumns.reducer';
import { selectAlumnsState } from './alumns.selectors';

describe('Alumns Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAlumnsState({
      [fromAlumns.alumnsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
