class Storage {
  getBool(key, defaultValue) {
    let value = this.getInt(key, defaultValue)
    value = value ? true : false
    return value
  }
  setBool(key, value) {
    this.setInt(key, value ? 1 : 0)
  }
  getInt(key, defaultValue) {
    let value = parseInt(localStorage.getItem(key))
    value = isNaN(value) ? defaultValue : value
    return value
  }
  setInt(key, value) {
    value = parseInt(value)
    localStorage.setItem(key, value)
  }
}

const storage = new Storage()

export default storage