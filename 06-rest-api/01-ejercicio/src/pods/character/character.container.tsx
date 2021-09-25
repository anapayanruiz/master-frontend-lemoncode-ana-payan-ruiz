import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setHotel] = React.useState<Character>(createEmptyCharacter());
  const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams();
  const history = useHistory();

  // const handleLoadCityCollection = async () => {
  //   const apiCities = await api.getCities();
  //   setCities(apiCities);
  // };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setHotel(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    // handleLoadCityCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveHotel(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} cities={cities} onSave={handleSave} />;
};
