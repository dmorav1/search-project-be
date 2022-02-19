function getRandomIntInclusive(min: number, max: number) : number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
  }



function dataReviver(key: string, value: any) : any
{
  if (key === 'discussionId'){
    return parseInt(value,10)
  }
  if (key === 'likedAt') {
    return new Date(value)
  } else {
    return value

  }
}

function filterIsActive(data: any[]) : any[] {
  return data.filter(item => item.isActive)
}

  export  { getRandomIntInclusive, dataReviver  }

