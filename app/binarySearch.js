Array.prototype.toTwenty = function () {
  for (var i = 1; i <= 20; i++) {
    this.push(i);
  }
  return this;
}

Array.prototype.toForty = function () {
  for (var i = 2; i <= 40; i = i + 2) {
    this.push(i);
  }
  return this;
}
Array.prototype.toOneThousand = function () {
  for (var i = 10; i <= 1000; i = i + 10) {
    this.push(i);
  }
  return this;
}

Array.prototype.search = function (number) {

  var minIndex = 0;
  var maxIndex = this.length - 1;
  var foundIndex = -1;
  var currentIndex;
  var currentElement;
  var length = this.length;
  var count = 0;

  while (minIndex <= maxIndex) {
    if(number === this[minIndex]) {
      foundIndex = minIndex;
      break;
    } else if (number === this[maxIndex]) {
      foundIndex = maxIndex;
      break;
    } else {
      minIndex += 1;
      maxIndex -= 1;
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = this[currentIndex];
      if(currentElement === number) {
        foundIndex = currentIndex;
        break
      } else if (currentElement < number) {
        minIndex = currentIndex + 1;
      } else if (currentElement > number) {
        maxIndex = currentIndex - 1;
      }
    }
    count++;
  }
  return {count: count, index: foundIndex, length: length};

}