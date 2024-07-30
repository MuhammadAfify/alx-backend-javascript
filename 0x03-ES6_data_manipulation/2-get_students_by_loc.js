function getStudentsByLocation(stdListLocation, city) {
    return stdList.filter((stdListLocation) => stdListLocation.location === city)
}
export default getListStudentIds;
