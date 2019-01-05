import { action, observable, computed } from 'mobx'

let store = null

class Store {
  @observable lastUpdate = 0
  @observable light = false
  @observable name = 'Anonymous User,'

  constructor (isServer, lastUpdate) {
    this.lastUpdate = lastUpdate
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    }, 1000)
  }

  @computed get getName() {
    return  this.name;
  }

  stop = () => clearInterval(this.timer)
}

export function initializeStore (isServer, lastUpdate = Date.now()) {
  if (isServer) {
    return new Store(isServer, lastUpdate)
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate)
    }
    return store
  }
}
