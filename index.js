// Code your solution here
const findMatching = (drivers, name ) => {
    let driversList = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return driversList
}

const fuzzyMatch = (drivers, query ) => {
    let matchedDrivers = drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()))
    return matchedDrivers
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name)
}