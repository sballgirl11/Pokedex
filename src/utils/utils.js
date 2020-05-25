const colors = {
  ghost: '#6666bb',
  ice: '#66ccff',
  steel: '#aaaabb',
  rock: '#bbaa66',
  fighting: '#bb5544',
  fairy: '#ee99ee',
  ground: '#ddbb55',
  psychic: '#ff5599',
  electric: '#ffcc33',
  normal: '#aaaa99',
  bug: '#aabb22',
  water: '#3399ff',
  dragon: '#7766ee',
  flying: '#8899ff',
  fire: '#ff4422',
  poison: '#aa5599',
  grass: '#77cc55',
  dark: '#775544'
}

export const abbreviateName = name => {
  switch (name) {
    case 'speed': {
      return 'Spd'
    }
    case 'special-defense': {
      return 'Sp. Def'
    }
    case 'special-attack': {
      return 'Sp. Atk'
    }
    case 'defense': {
      return 'Def'
    }
    case 'attack': {
      return 'Atk'
    }
    case 'hp': {
      return 'HP'
    }
    default: {
      return name
    }
  }
}

export const createGradient = (color1, color2) => ({
  background: `linear-gradient( -45deg, ${color1}, ${color2})`
})
export const createColorName = type => {
  return colors[type]
}
export const createHeaderColor = types => {
  if (types.length > 1) {
    return createGradient(
      createColorName(types[0].type.name),
      createColorName(types[1].type.name)
    )
  } else {
    return { background: createColorName(types[0].type.name) }
  }
}
