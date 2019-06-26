function sumAll(range) {
    const maximumValue = Math.max(range[0], range[1]);
    const minimumValue = Math.min(range[0], range[1]);

    return maximumValue * (maximumValue + 1) / 2 - minimumValue * (minimumValue - 1) / 2;
}