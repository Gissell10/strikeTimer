export default class WorkoutClock {
  constructor(numberOfRounds, workTime, breakTime) {
    let roundValue = Array.from({ length: numberOfRounds }).map(() => 0);

    this.rounds = roundValue.map(() => ({ workTime, breakTime }));
    this.currentRoundIndex = 0;
  }

  getActiveRound() {
    return this.rounds[this.currentRoundIndex];
  }

  getActiveRounds() {
    return this.rounds.filter(
      (round) => round.workTime > 0 || round.breakTime > 0
    );
  }

  actualRound() {
    const activeRounds = this.rounds.filter(
      (round) => round.workTime > 0 || round.breakTime > 0
    );
    const totalRound = this.rounds.length;
    const existingRound = totalRound + 1 - activeRounds.length;
    return existingRound;
  }

  numberOfRounds() {
    const numberofRounds = this.rounds.length;
    return numberofRounds;
  }

  isDone() {
    const activeRounds = this.rounds.filter(
      (round) => round.workTime > 0 || round.breakTime > 0
    );
    return !Boolean(activeRounds.length);
  }

  runOneSecond() {
    const currentRound = this.getActiveRound();

    const { workTime, breakTime } = currentRound;

    if (workTime > 0) {
      currentRound.workTime = workTime - 1;
    } else if (breakTime > 0) {
      currentRound.breakTime = breakTime - 1;
    }

    // move index if current round is consumed
    if (currentRound.workTime === 0 && currentRound.breakTime === 0) {
      this.currentRoundIndex = Math.min(
        this.currentRoundIndex + 1,
        this.rounds.length - 1
      );
      this.currentRoundIndex;
      //currentRoundInndex show me current round started in 1
    }
  }
}
