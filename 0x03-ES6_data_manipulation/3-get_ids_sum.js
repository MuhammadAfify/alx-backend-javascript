const getStudentIdsSum = (std) => std.reduce((acc, curr) => acc + curr.id, 0);

export default getStudentIdsSum;
