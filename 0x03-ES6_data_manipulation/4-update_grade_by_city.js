function updateStudentGradeByCity(students, city, newGrades) {
    const stdListLocation = students.filter((students) => students.location === city);
    return stdListLocation.map((student) => {
        const filterGradeStd = newGrades.filter((grade) => grade.studentId === student.id);
        if (filterGradeStd.length > 0)
            {
                return {
                    ...student,
                    grade: filterGradeStd[0].grade,
                };
            }
        return {
            ...student,
            grade: 'N/A',
        };
    });
}

    export default updateStudentGradeByCity;
