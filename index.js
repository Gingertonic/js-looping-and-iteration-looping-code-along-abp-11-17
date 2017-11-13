function printBadges(list) {
  for (let i=0; i < list.length; i++) {
    console.log(`Welcome ${list[i]}! You are employee ${i+1}`)
    return list
  }
}
