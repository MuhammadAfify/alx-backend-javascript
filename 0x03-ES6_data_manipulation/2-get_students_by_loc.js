function getStudentsByLocation(stdListLocation, city) {
    return (stdList.filter((student) => student.location === city))
}
export default getListStudentIds;
