export const typeColors = {
  bug: '#BFD487',
  dark: '#57402D',
  dragon: '#6431B7',
  electric: '#D1AF51',
  fairy: '#E196CB',
  fighting: '#B33131',
  fire: '#D74242',
  flying: '#C46CA2',
  ghost: '#7259E3',
  grass: '#8ED387',
  ground: '#E3A759',
  ice: '#5DB9BB',
  normal: '#C4866C',
  poison: '#8F51D2',
  psychic: '#D268B2',
  rock: '#A17E50',
  steel: '#D3FEFF',
  water: '#5966E3'
}

export const ChooseType = (item) => {
  if (item === 'bug') return typeColors.bug
  if (item === 'dark') return typeColors.dark
  if (item === 'dragon') return typeColors.dragon
  if (item === 'electric') return typeColors.electric
  if (item === 'fairy') return typeColors.fairy
  if (item === 'fight') return typeColors.fight
  if (item === 'fighting') return typeColors.fighting
  if (item === 'fire') return typeColors.fire
  if (item === 'flying') return typeColors.flying
  if (item === 'ghost') return typeColors.ghost
  if (item === 'grass') return typeColors.grass
  if (item === 'ground') return typeColors.ground
  if (item === 'ice') return typeColors.ice
  if (item === 'normal') return typeColors.normal
  if (item === 'poison') return typeColors.poison
  if (item === 'psychic') return typeColors.psychic
  if (item === 'rock') return typeColors.rock
  if (item === 'steel') return typeColors.steel
  if (item === 'water') return typeColors.water
}

export const themeColors = [
  {
    red: {
      base: '#8F5B5B',
      basehighligth: '#BF9797'
    },
    golden: {
      base: '#8F815B',
      basehighlight: '#BFB497'
    }
  }
]
