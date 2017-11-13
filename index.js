function printBadges(list) {
  for (let i=0; i < list.length-1; i++) {
    console.log(`Welcome, ${list[i]}! You are employee ${i+1}`)
  }
}