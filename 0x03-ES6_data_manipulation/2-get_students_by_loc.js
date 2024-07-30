function getStudentsByLocation(stdListLocation, city) {
	return stdListLocation.filter((stdListLocation) => stdListLocation.location === city)
}
export default getStudentsByLocation;
