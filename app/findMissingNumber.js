module.exports = {
  findMissing: function (firstarr, secondarr) {
    var i;
    var secondarrsize = secondarr.length;
    for (i = 0; i < secondarrsize; i++) {
      if (firstarr[i] != secondarr[i]) {
        return secondarr[i];
      }
    }
    return 0;
  }
}