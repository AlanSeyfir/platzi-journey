//Bring the average with different ponderations
const notes = [
    {
        course: "Web dev",
        note: 10,
        credit: 2,
    },
    {
        course: "English",
        note: 8,
        credit: 5,
    },
    {
        course: "History",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map((noteObject) => {
    return noteObject.note * noteObject.credit;
});
console.log(notesWithCredit);
const sumNotesWithCredit = notesWithCredit.reduce((sum = 0, newValue) => {
    return sum + newValue;
});

const credits = notes.map((noteObject) => {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce((sum = 0, newValue) => {
    return sum + newValue;
})

const averagePonderationNotesWithCredits = sumNotesWithCredit / sumOfCredits;


console.log(averagePonderationNotesWithCredits);