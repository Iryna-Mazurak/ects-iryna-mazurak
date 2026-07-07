class ECTS {
  constructor(score) {
    this.score = score;
  }

  ectsFromScore() {
    const score = this.score;

    if (score < 0 || score > 100) {
      throw new Error("Invalid score");
    }

    if (score >= 90) return "A";
    if (score >= 82) return "B";
    if (score >= 74) return "C";
    if (score >= 65) return "D";
    if (score >= 60) return "E";

    return "F";
  }
}

module.exports = { ECTS };