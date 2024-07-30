function getListStudentIds(stdList) {
    if (!Array.isArray(stdList)) {
        return [];
    }
    return (stdList.map(student => student.id))
}

export default getListStudentIds;
