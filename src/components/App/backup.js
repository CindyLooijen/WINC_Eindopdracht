const filterStateOnAssignment = (assignment) => {
  return numberedStateData.filter((item) => item.assignment === assignment);
};

const filteredStateOnAssignments = allUniqueAssignments.map((assignment) =>
  filterStateOnAssignment(assignment)
);

const filterAssignmentOnDifficulty = (assignment) => {
  return assignment.map((item) => ({
    //assignment: item.assignment,
    scoreDifficulty: item.scoreDifficulty,
  }));
};

const filteredAssignmentOnDifficulty = filteredStateOnAssignments.map(
  (assignment) => filterAssignmentOnDifficulty(assignment)
);

const calculateAverageScoreDifficulty = (allScores) => {
  console.log(allScores);
  return allScores.reduce(
    (a, b) => a.scoreDifficulty + b.scoreDifficulty / allScores.length
  );
};

const averageScoresDifficulty = filteredAssignmentOnDifficulty.map(
  (assignment) => calculateAverageScoreDifficulty(assignment)
);

//console.log(filteredAssignmentOnDifficulty);
console.log(averageScoresDifficulty);

/* const getAverageScore = () => {
    for (let index = 0; index < allUniqueAssignments.length; index++) {
      const filteredStateDataOnAssignments = numberedStateData
        .filter((item) => item.assignment === allUniqueAssignments[index])
        .map((item) => ({
          assignment: item.assignment,
          scoreDifficulty: item.scoreDifficulty,
        }));
      console.log(filteredStateDataOnAssignments);
    }
  }; */
