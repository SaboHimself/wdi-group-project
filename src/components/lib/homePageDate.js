class HomePageDate {
  static setStartDate(date) {
    localStorage.setItem('startDate', date)
  }

  static getStartDate() {
    return localStorage.getItem('startDate')
  }

  static setEndDate(date) {
    localStorage.setItem('endDate', date)
  }

  static getEndDate() {
    return localStorage.getItem('endDate')
  }

  static removeStartDate() {
    localStorage.removeItem('startDate')
  }
  static removeEndDate() {
    localStorage.removeItem('endDate')
  }
}

export default HomePageDate
