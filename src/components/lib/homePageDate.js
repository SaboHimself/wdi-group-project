class HomePageDate {
  static setDate(date) {
    localStorage.setItem('date', date)
  }

  static getDate() {
    return localStorage.getItem('date')
  }

  static removeDate() {
    localStorage.removeItem('date')
  }
}

export default HomePageDate
