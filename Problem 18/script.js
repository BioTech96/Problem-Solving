function maxMeetings(startTimes, endTimes) {
    const meetingsWithIndices = startTimes.map((start, index) => ({ start, end: endTimes[index], index }));

    meetingsWithIndices.sort((a, b) => a.end - b.end);

    let count = 0;
    let currentEndTime = -1; 

    const scheduledMeetings = [];

    for (const meeting of meetingsWithIndices) {
        const { start, end, index } = meeting;
        if (start >= currentEndTime) {
            count++;
            currentEndTime = end;
            scheduledMeetings.push(index);
        }
    }

    return [count, scheduledMeetings];
}

// Test:
const startTimes = [1,3,0,5,8,5];
const endTimes = [2,4,6,7,9,9];
const [maxCount, scheduledMeetings] = maxMeetings(startTimes, endTimes);
console.log("Maximum number of meetings:", maxCount);
console.log("Scheduled meetings:", scheduledMeetings);
